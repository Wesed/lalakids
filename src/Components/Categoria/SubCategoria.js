import React from 'react';
import { useParams } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';
import Item from './Item';
import Container from './../Useful/Container';
import EmptyAlert from './../Useful/EmptyAlert';

const SubCategoria = () => {


  const params = useParams();
  const p1 = params.id[0].toUpperCase() + params.id.substr(1);
  const p2 = params['*'];

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

    if (data?.allProdutos.length <= 0) return <EmptyAlert> Não temos produtos nessa categoria 🙁 </EmptyAlert>
    
  return (
    <Container>
      {data?.allProdutos.map((prod, index) => (
          <Item key={index} prod={prod} />
        ))}
    </Container>
  )
}

export default SubCategoria;