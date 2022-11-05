import React from 'react'
import Container from './../Useful/Container';
import { UserContext } from './../UserContext';
import { gql, useQuery } from '@apollo/client';
import Error from './../Useful/Error';
import Item from './../Categoria/Item';
import styled from 'styled-components';
import EmptyCategory from './../Useful/EmptyCategory';

const FavoriteContainer = () => {
  const {dataContext, login, errorContext, loadingContext} = React.useContext(UserContext);

  const elements = [];

  if (dataContext) {
    dataContext.userClient.favorite.forEach(el => {
      elements.push(el.codeProd);
    });
  }

  const list = JSON.stringify(elements);

  const PROJECT_QUERY = gql `
    query MyQuery  {
      allProdutos(filter: {id: { in: ${list} }}) {
      id
      imgBackground {
        url
      }
      imgProd {
        url
      }
      priceProd
      titleProd
  }
}
`;

  const {error, data } = useQuery(PROJECT_QUERY, {
    variables: {
      limit: 100,
    },
  });
  


  // tratar melhor essas variaveis dps 
  if (errorContext) return <Error> Ops! Algo não está funcionando bem.</Error>

  if (loadingContext) return <p> Loading... </p>

  if (!login) return <EmptyCategory> Você precisa estar logado para acessar sua lista de favoritos!</EmptyCategory>

  return (
    <Container>
      {data?.allProdutos.map((prod, index) => (
          <Item key={index} prod={prod} />
      ))}
    </Container>
  );
}

export default FavoriteContainer;