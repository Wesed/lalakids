import React from 'react'
import { useQuery } from 'graphql-hooks';
import Item from './Item';

import styled from 'styled-components';

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import "swiper/css/navigation";
import 'swiper/css';
import UseMedia from './../Useful/UseMedia';

const Container = styled.div`
  margin-bottom: 3.75rem;
`;

const Title = styled.h1`
  margin-bottom: 1.5rem;
`;

const CategoriaGeralCarousel = ({category, title}) => {

const media = UseMedia('(max-width: 30rem)');


const PROJECT_QUERY = `
  query MyQuery {
    allProdutos(filter: {id: {in: [${category}]}}) {
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

  if (error) return 'Ops, algo deu errado! - CategoriaGeralCarousel'

    return (
      <Container>
        <Title> {title} </Title>
        <Swiper
          spaceBetween={media? 20 : 40}
          slidesPerView={media ? 2 : 4}
          navigation={true}
        >
          {data?.allProdutos.map((prod, index) =>           
            <SwiperSlide key={index}>
              <Item prod={prod} />
            </SwiperSlide>
          )}
        </Swiper>
      </Container>
    );
}

export default CategoriaGeralCarousel;