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
import "swiper/css/grid";

import { Grid } from "swiper";

import ItemCategory from './ItemCategory';
import Container from './../Useful/Container';
import UseMedia from '../Useful/UseMedia';

SwiperCore.use([Navigation]);

const Categories = styled.div`
  max-width: 70%;
  margin: 2.5rem auto;

  @media (max-width: 30rem) {
    max-width: 80%;
  }

  a {
    text-decoration: none;
    color: black
  }
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

// const Items = styled.section`
//   background: white;
//   max-width: 80%;
//   margin: 2.5rem auto;
//   display: grid;
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

const Categoria = ({option}) => {
  // const [categorie, setCategorie] = React.useState(true);

  const p = useParams();
  const params = p.id[0].toUpperCase() + p.id.substr(1);
  const media = UseMedia('(max-width: 30rem)');


  //GRAPHQL query
  const PROJECT_QUERY = `
  query MyQuery {
    allProdutos(filter: {categoryProd: {eq: "${params}"}}) {
      id
      imgBackground {
        url
      }
      imgProd {
        url
      }
      priceProd
      titleProd
      subcategoryProd
    }

    category(filter: {slug: {eq: "${p.id}"}}) {
      titleCategory
      jsonCategory
    }
  }
  `;

  const {error, data } = useQuery(PROJECT_QUERY, {
    variables: {
      limit: 100,
    },
  });

  // console.log(data);

  if (error) return 'Ops, algo deu errado!';

  if (data) {
    if (data.allProdutos.length === 0) {
      return  <NoProd> <h1> Não temos produtos nessa categoria :(</h1> </NoProd>;
    }
  }

  return (
    <>
      {/* exibir as subcategorias aqui  */}
      <Categories>
        <Swiper
          spaceBetween={media ? 0 : 15}
          slidesPerView={media ? 3 : 5}
          navigation={true}
          grid={{
            rows: 2,
            fill: "row",
          }}
          pagination={{
            clickable: true
          }}
          modules={[Grid]}
        >
          {data?.category.jsonCategory.subcategory.map((category, index) => (
            <SwiperSlide key={index}>
              <ItemCategory category={{ category }} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Categories>

      <Container>
        {data?.allProdutos.map((prod, index) => (
          <Item key={index} prod={prod} />
        ))}
      </Container>
    </>
  );
}

export default Categoria;