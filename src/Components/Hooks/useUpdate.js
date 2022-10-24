import React from 'react';
import { buildClient } from '@datocms/cma-client-browser';
import { useQuery } from 'graphql-hooks';



const useUpdate = () => {
  const [dataUser, setData] = React.useState(null);

  const PROJECT_QUERY = `
    query MyQuery {
      userClient(filter: {id: {eq: "37138133"}}) {
      favorite
      }
    }`;

const {error, data } = useQuery(PROJECT_QUERY, {
  variables: {
    limit: 100,
  },
});

React.useEffect(()=>{
  setData(data);
  // data && console.log(data.userClient.favorite.favorite[0]);
}, [data]);

  /* dar um useQuery aq, pegar o json dos favoritos,
  verificar se o item ja esta adicionado, se nao, adiciona
  dai vai ser o json + a nova linha no 'favorite', pra
  evitar q sobreescreva*/

  async function update(idProd) {
  
      console.log(idProd);
  
      if (dataUser) {
        const favorites = dataUser.userClient.favorite;
  
        const favoriteFound = favorites.find((favorite)=>{
          console.log(favorite.codeProd);
          return favorite.codeProd === idProd;
        });

        if (!favoriteFound) {
          // so vai executar se favoriteFound for falso, ou seja, o item nao esta na lista de favoritos
          try {
            const client = buildClient({
              apiToken: "126a9840ad52f13ded80e6ac84b657",
            });
            const idClient = "37138133";
            // transform em json e remove o colchete que fecha o json, afim de concatenar
            let favoriteList = JSON.stringify(favorites);
            favoriteList = favoriteList.substring(0, favoriteList.length - 1);
            console.log(favoriteList);
            const item = await client.items.update(idClient, {
              favorite: favoriteList + ',{"codeProd": "' + idProd + '"}]',
            });
          } catch (err) {
            return err;
          }
          return "ok";
        }

        // agora preciso desenvolver uma maneira pra quando a lista estiver vazia,
        // pois nesse caso so funciona se a lista ja tiver algum elemento
      } 
  }
  
  return {
    update
  }
}

export default useUpdate