import React from 'react';
import { buildClient } from '@datocms/cma-client-browser';
import { useNavigate } from 'react-router-dom';

const useUpdate = () => {
  const navigate = useNavigate();


const addFavorite = async (dataUser, idUser, id, setFavorite) => {

    const favorites = dataUser?.userClient.favorite;

      // tirar esse api token e pegar no userContext
      
      const client = buildClient({
        apiToken: "126a9840ad52f13ded80e6ac84b657",
      });

      favorites.push({codeProd: id});

      try {

          let favoriteList = JSON.stringify(favorites);

          const item = await client.items.update(idUser, {
            favorite: favoriteList,
          });
        setFavorite(true);
        // document.location.reload();
      } catch (err) {
        console.log(err);
      }
};

const removeFavorite = async (dataUser, idUser, id, setFavorite) => {

    const favorites = dataUser?.userClient.favorite;

    console.log(favorites);

    /* salva em index a posicao do produto clicado */
    const index = favorites.findIndex((favorite) => {
      return favorite.codeProd === id;
    });

    // console.log(index);

    favorites.splice(index, 1); /* remove o item na posicao index*/

    const client = buildClient({
      apiToken: "126a9840ad52f13ded80e6ac84b657",
    });

    try {
      let favoriteList = JSON.stringify(favorites);
      console.log(favoriteList);
      const item = await client.items.update(idUser, {
        favorite: favoriteList,
      });
      setFavorite(false);
    } catch (err) {
      // console.log(err);
    }
};

const toLogin = (login) => {
  if (!login) {
    alert('Precisa estar logado para salvar como favorito 😃');
    setTimeout(() => {
      navigate('/login');
    }, 1000);
  }
};


  return {
    addFavorite,
    removeFavorite,
    toLogin
  }
}

export default useUpdate;