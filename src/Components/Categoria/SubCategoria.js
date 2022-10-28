import React from 'react';
import { useParams } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';
import Item from './Item';
import styled  from 'styled-components';
import Container from './../Useful/Container';
import EmptyCategory from './../Useful/EmptyCategory';

const SubCategoria = () => {

  const params = useParams();
  const p1 = params.id[0].toUpperCase() + params.id.substr(1);
  const p2 = params['*'];

    //GRAPHQL query
    const PROJECT_QUERY = gql `
    query MyQuery {
      allProdutos(filter: {categoryProd: {eq: "${p1}"}, subcategoryProd: {matches: {pattern: "${p2}"}}}) {
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
    
  return (
    <Container>
      {data?.allProdutos.length <= 0 && <EmptyCategory /> }
      {data?.allProdutos.map((prod, index) => (
          <Item key={index} prod={prod} />
        ))}
    </Container>
  )
}

export default SubCategoria;