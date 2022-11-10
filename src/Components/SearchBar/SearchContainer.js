import React from 'react';
import { useParams } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';
import Container from './../Useful/Container';
import Item from './../Categoria/Item';
import EmptyAlert from './../Useful/EmptyAlert';

const SearchContainer = () => {

  const params = useParams();

  console.log(params['*']);


  const PROJECT_QUERY = gql `
  query MyQuery {
  allProdutos(filter: {OR: [{categoryProd: {matches: {pattern: "${params['*']}"}}}, {subcategoryProd: {matches: {pattern: "${params['*']}"}}}]}) {
    id
    imgBackground {
      url
    }
    imgProd {
      url
    }
    priceProd
    titleProd
    categoryProd
    subcategoryProd
  }
}
  `;

  const {error, data } = useQuery(PROJECT_QUERY, {
    variables: {
      limit: 100,
    },
  });

  console.log(data);

  if (data) {
    if (data.allProdutos.length === 0) {
      return  <EmptyAlert tip="Tente usar palavras diferentes"> Ops, não encontramos resultados para essa busca 🙁  </EmptyAlert>;
    }
  }


  return (
    <Container>
      {data?.allProdutos.map((prod, index) => (
        <Item key={index} prod={prod} />
      ))}
    </Container>
  );
}

export default SearchContainer;