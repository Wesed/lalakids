import React from 'react';
import styled from 'styled-components';
import Item from './Item';

import prod1 from '../../Assets/prod1.jpeg';
import prod2 from '../../Assets/prod2.jpeg';
import prod3 from '../../Assets/prod3.jpeg';
import prod4 from '../../Assets/prod4.jpeg';
import prod5 from '../../Assets/prod5.jpeg';
import prod6 from '../../Assets/prod6.jpeg';
import prod7 from '../../Assets/prod7.jpeg';
import prod8 from '../../Assets/prod8.jpeg';
import prod9 from '../../Assets/prod9.jpeg';
import prod10 from '../../Assets/prod10.jpeg';
import prod11 from '../../Assets/prod11.jpeg';
import prod12 from '../../Assets/prod12.jpeg';
import prod13 from '../../Assets/prod13.jpeg';
import prod14 from '../../Assets/prod14.jpeg';
import prod15 from '../../Assets/prod15.jpeg';
import prod16 from '../../Assets/prod16.jpeg';
import prod17 from '../../Assets/prod17.jpeg';
import prod18 from '../../Assets/prod18.jpeg';
import prod19 from '../../Assets/prod19.jpeg';

//graphql
import { useQuery } from "graphql-hooks";

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

const SwiperConfig = styled.section`
  display: flex;
  justify-content: space-between;
`;

const DivProd = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 1rem;
  width: 150px;
  /* height: 180px; */
  /* border: 1px solid blue; */
  text-align: center;
  transition: .1s;

  :hover {
    transform: scale(1.1);
  }

  img {
    max-width: 100%;
    height: 150px;
    object-fit: cover;
  }

  p {
    margin-top: .5rem;
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

// Crio uma 'tabela' chamada categoriaM e categoriaF, que terá todas as categorias (sapatos, bolsas, camisetas, etc)
// Cada categoria vai ter uma 'imagem de capa'
// assim, caso mude as categorias no cms, o site ja capta automaticamente.

const Categoria = ({option}) => {

  const [categorie, setCategorie] = React.useState(true);

  //GRAPHQL query
  const PROJECT_QUERY = `
  query MyQuery {
    allProdutos {
      id
      imgBackground {
        id
        url
      }
      imgProd {
        id
        url
      }
      priceProd
      size1
      size10
      size2
      size16
      size14
      size12
      size8
      size6
      size5
      size4
      size3
      size22
      size18
      size20
      titleProd
    }
  }  
  `;

  const {error, data } = useQuery(PROJECT_QUERY, {
    variables: {
      limit: 100,
    },
  });

  // se for geral, a categoria vai ser false (n exibe as subcategorias)
  // qd for true, deve fazer usar o useParams pra capturar a categoria e fazer o graphQL

  React.useEffect( ()=> {
    if(option === 'Geral') {
      setCategorie(false);
    }
  }, [option]);


  return (
    <>
      {categorie 
      && 
      <Categories>
      <SwiperConfig>
          <Swiper
            spaceBetween={20}
            slidesPerView={5}
            navigation={true}
            >
            <SwiperSlide>
              <DivProd>
                <img src={prod2} alt="produto 2" />
                <p>Produto 2</p>
              </DivProd>
            </SwiperSlide>

            <SwiperSlide>
              <DivProd>
                <img src={prod4} alt="produto 4" />
                <p>Produto 4</p>
              </DivProd>
            </SwiperSlide>

            <SwiperSlide>
              <DivProd>
                <img src={prod5} alt="produto 5" />
                <p>Produto 6</p>
              </DivProd>
            </SwiperSlide>

            <SwiperSlide>
              <DivProd>
                <img src={prod7} alt="produto 7" />
                <p>Produto 7</p>
              </DivProd>
            </SwiperSlide>

            <SwiperSlide>
              <DivProd>
                <img src={prod9} alt="produto 9" />
                <p>Produto 9</p>
              </DivProd>
            </SwiperSlide>
          </Swiper>
      </SwiperConfig>

      <SwiperConfig>
          <Swiper
            spaceBetween={20}
            slidesPerView={5}
            navigation={true}
            >
            <SwiperSlide>
              <DivProd>
                <img src={prod2} alt="produto 2" />
                <p>Produto 2</p>
              </DivProd>
            </SwiperSlide>

            <SwiperSlide>
              <DivProd>
                <img src={prod4} alt="produto 4" />
                <p>Produto 4</p>
              </DivProd>
            </SwiperSlide>

            <SwiperSlide>
              <DivProd>
                <img src={prod5} alt="produto 5" />
                <p>Produto 6</p>
              </DivProd>
            </SwiperSlide>

            <SwiperSlide>
              <DivProd>
                <img src={prod7} alt="produto 7" />
                <p>Produto 7</p>
              </DivProd>
            </SwiperSlide>

            <SwiperSlide>
              <DivProd>
                <img src={prod9} alt="produto 9" />
                <p>Produto 9</p>
              </DivProd>
            </SwiperSlide>

            <SwiperSlide>
              <DivProd>
                <img src={prod2} alt="produto 2" />
                <p>Produto 2</p>
              </DivProd>
            </SwiperSlide>

            <SwiperSlide>
              <DivProd>
                <img src={prod4} alt="produto 4" />
                <p>Produto 4</p>
              </DivProd>
            </SwiperSlide>

            <SwiperSlide>
              <DivProd>
                <img src={prod5} alt="produto 5" />
                <p>Produto 6</p>
              </DivProd>
            </SwiperSlide>

            <SwiperSlide>
              <DivProd>
                <img src={prod7} alt="produto 7" />
                <p>Produto 7</p>
              </DivProd>
            </SwiperSlide>

            <SwiperSlide>
              <DivProd>
                <img src={prod9} alt="produto 9" />
                <p>Produto 9</p>
              </DivProd>
            </SwiperSlide>

          </Swiper>
      </SwiperConfig>

      </Categories>
      }

      <Container>
        {data?.allProdutos.map((prod, index) => <Item key={index} prod={prod} />)}; 
      </Container>
      {/* <Container>{prods.map((prod, index) => <Item key={index} prod={prod} />)}; </Container> */}
    </>
  )
}

export default Categoria;


/* 
  1. Esse component vai receber a categoria na hora que for chamado, se 'M', entao retorna a categoria masculina
     se 'G' entao  retorna todos os produtos (main, por exemplo)

  2. As chamadas do graphQL serão feitas aqui 
*/ 