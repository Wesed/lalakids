import React from 'react';
import { buildClient } from '@datocms/cma-client-browser';
import { useQuery } from 'graphql-hooks';


const useUpdate = (emailUser) => {
  const [dataUser, setData] = React.useState(null);

  console.log(emailUser);

  const PROJECT_QUERY = `
    query MyQuery ($email: String!){
      userClient(filter: {emailCli: {eq: $email}}) {
      favorite
      }
    }`;


  const {error, data } = useQuery(PROJECT_QUERY, {
    variables: {
      $email: emailUser,
      limit: 100,
    },
  });

console.log('data', data);

React.useEffect(()=>{
  setData(data);
}, [data]);

  // async function update(idProd=undefined) {
  
  //     if (dataUser) {
  //       const favorites = dataUser.userClient.favorite;

  //       const favoriteFound = favorites.find((favorite)=>{
  //         console.log(favorite.codeProd);
  //         return favorite.codeProd === idProd;
  //       });

  //       if (!favoriteFound) {
  //         // so vai executar se favoriteFound for falso, ou seja, o item nao esta na lista de favoritos
  //         try {
  //           const client = buildClient({
  //             apiToken: "126a9840ad52f13ded80e6ac84b657",
  //           });
  //           if (favorites.length === 0) {
  //             console.log('zero');
  //             const idClient = idUser; // remover isso e mandar o idUser direto
  //             let favoriteList = JSON.stringify(favorites);
  //             const item = await client.items.update(idClient, {
  //               favorite: '[{"codeProd": "' + idProd + '"}]',
  //             });
  //           } else {
  //             console.log('tem');
  //             const idClient = idUser; // remover isso e mandar o idUser direto
  //             // transform em json e remove o colchete que fecha o json, afim de concatenar
  //             let favoriteList = JSON.stringify(favorites);
  //             favoriteList = favoriteList.substring(0, favoriteList.length - 1);
  //             console.log(favoriteList);
  //             const item = await client.items.update(idClient, {
  //               favorite: favoriteList + ',{"codeProd": "' + idProd + '"}]',
  //             });
  //           }
  //         } catch (err) {
  //           return err;
  //         }
  //         return "ok";
  //       }
  //     } 
  // }
  
  return {
    // update
  }
}

export default useUpdate