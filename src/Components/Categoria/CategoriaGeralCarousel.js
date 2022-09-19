import React from 'react'
import { useQuery } from 'graphql-hooks';
import Item from './Item';

import styled from 'styled-components';

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper/core";
import 'swiper/css';
import "swiper/css/navigation";
import 'swiper/css';

const Container = styled.div`
  /* border: 1px solid red; */
  margin-bottom: 3.75rem;
`;

const SwiperConfig = styled.section`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h1`
  margin-bottom: 1.5rem;
`;

const CategoriaGeralCarousel = ({category, title}) => {


const PROJECT_QUERY = `
  query MyQuery {
    allProdutos(filter: {id: {in: [${category}]}}) {
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
        <Title> {title} </Title>
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
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