import React from 'react';
import { buildClient } from '@datocms/cma-client-browser';
import { gql, useQuery } from '@apollo/client';

const useUpdate = (id) => {
  const [dataUser, setData] = React.useState(null);
  const [idUser, setID] = React.useState(id);
  const [idProd, setIdProd] = React.useState();


const PROJECT_QUERY = gql`
    query MyQuery {
      userClient(filter: {id: {eq: "${idUser}"}}) {
      favorite
      }
}`;

// const {data, error} = useQuery(PROJECT_QUERY); 
const {data, error} = useQuery(PROJECT_QUERY, {skip: idUser === true}); 

React.useEffect(()=>{
  setID(id);
  setData(data);
}, [id, data, dataUser]);


const update = async (id) => {
  // setIdProd(id);

  /* por algum motivo, mesmo o componente renderizando novamente graças ao setIdProd, o useQuery nao atualiza a lista de favoritos,
   fazendo com q o ultimo valor sempre seja sobreescrito. Por esse motivo, forcei a pagina a recarregar td vez que um produto
   for favoritado com sucesso, ate que saiba como resolver esse problema.  
   */

  if (dataUser) {
    const favorites = dataUser.userClient.favorite;

    const favoriteFound = favorites.find((favorite) => {
      return favorite.codeProd === id;
    });

    if (!favoriteFound) {
      let response = null;
      // so vai executar se favoriteFound for falso, ou seja, o item nao esta na lista de favoritos
      const client = buildClient({
        apiToken: "126a9840ad52f13ded80e6ac84b657",
      });

      try {
        if (favorites.length === 0) {
          const item = client.items.update(idUser, {
            favorite: '[{"codeProd": "' + id + '"}]',
          });
        } else {
          // transform em json e remove o colchete que fecha o json, afim de concatenar
          let favoriteList = JSON.stringify(favorites);
          favoriteList = favoriteList.substring(0, favoriteList.length - 1);
          console.log(favoriteList);
          const item = await client.items.update(idUser, {
            favorite: favoriteList + ',{"codeProd": "' + id + '"}]',
          });
        }
        response = "ok";
        document.location.reload();
      } catch (err) {
        response = "fail";
      } finally {
        return response;
      }
    }
  }
};


  return {
    update
  }
}

export default useUpdate;