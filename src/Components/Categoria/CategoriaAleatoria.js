import React from 'react'
import { gql, useQuery } from '@apollo/client';

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import "swiper/css/navigation";
import 'swiper/css';
import Item from './Item';
import styled  from 'styled-components';
import UseMedia from './../Useful/UseMedia';
import ItemRandom from './ItemsRandom';


/*
  Esse componente e resposavel por puxar produtos aleatorios em um carousel
*/

const Container = styled.div`
  width: 100%;
  margin: 2.5rem auto;
  background: white;
  padding: 2rem;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
`;

const CategoriaAleatoria = () => {

  const media = UseMedia('(max-width: 30rem)');

    const PROJECT_QUERY = gql`
    query MyQuery {
      allProdutos {
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

  return (
    <Container>  border: 1px solid red;

      <h3> Você vai amar! </h3>
      <Swiper 
      spaceBetween={media ? 20 : 40} 
      slidesPerView={media ? 3 : 6}
      navigation={true}>
        {data?.allProdutos.map((prod, index) => (
          <SwiperSlide key={index}>
            <ItemRandom prod={prod} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}

export default CategoriaAleatoria;