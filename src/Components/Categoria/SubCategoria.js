import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'graphql-hooks';
import Item from './Item';
import styled  from 'styled-components';
import Container from './../Useful/Container';

// const Items = styled.section`
//   background: white;
//   max-width: 80%;
//   margin: 2.5rem auto;
//   display: grid;
//   /* nao pode ser object fit aq, pq qd tiver so 1 produto, vai distorcer*/
//   grid-template-columns: repeat(auto-fit, minmax(150px, auto));
//   gap: 4rem 5rem;
//   padding: 1rem;
//   border-radius: 10px;

//   @media (max-width: 30rem) {
//     max-width: 100%;
//     gap: 2rem 1rem;
//     margin: auto;
//   }
// `;

const SubCategoria = () => {

  const params = useParams();
  const p1 = params.id[0].toUpperCase() + params.id.substr(1);
  const p2 = params['*'];

    //GRAPHQL query
    const PROJECT_QUERY = `
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
      {data?.allProdutos.map((prod, index) => (
          <Item key={index} prod={prod} />
        ))}
    </Container>
  )
}

export default SubCategoria;