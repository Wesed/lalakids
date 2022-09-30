import React from 'react';
import styled from 'styled-components';
import Item from './Item';

//graphql
import { useQuery } from "graphql-hooks";

import { useParams } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper/core";
import 'swiper/css';
import "swiper/css/navigation";

SwiperCore.use([Navigation]);

const Categories = styled.div`
  max-width: 70%;
  margin: 2.5rem auto;
  border-radius: 10px;
`;

const NoProd = styled.div`
  display: flex;
  width: 100vw;
  height: 50vh;
  justify-content: center;
  align-items: center;

  h1 {
    color: ${props => props.theme.colors.textDark};
    font-size: 1.25rem;
  }
  
`;

const Container = styled.section`
  background: white;
  max-width: 80%;
  margin: 2.5rem auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, auto));
  gap: 4rem 5rem;
  padding: 1rem;
  border-radius: 10px;

  @media (max-width: 30rem) {
    max-width: 100%;
    gap: 2rem 1rem;
    margin: auto;
  }
`;

const Categoria = ({option}) => {
  // const [categorie, setCategorie] = React.useState(true);

  const p = useParams();
  const params = p.id[0].toUpperCase() + p.id.substr(1);


  //GRAPHQL query
  const PROJECT_QUERY = `
  query MyQuery {
    allProdutos(filter: {genreProd: {eq: "${params}"}}) {
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

  if (error) return 'Ops, algo deu errado!';

  if (data) {
    if (data.allProdutos.length === 0) {
      return  <NoProd> <h1> Não temos produtos nessa categoria :(</h1> </NoProd>;
    }
  }

  return (
      <Container>
        {data?.allProdutos.map((prod, index) => <Item key={index} prod={prod} />)}
      </Container>
  )
}

export default Categoria;