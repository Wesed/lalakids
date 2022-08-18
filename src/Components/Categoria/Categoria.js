import React from 'react';
import styled from 'styled-components';

import prod2 from '../../Assets/prod2.webp';
import prod4 from '../../Assets/prod4.webp';
import prod5 from '../../Assets/prod5.webp';
import prod7 from '../../Assets/prod7.webp';
import prod9 from '../../Assets/prod9.webp';

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper/core";
import 'swiper/css';
import "swiper/css/navigation";

SwiperCore.use([Navigation]);

const Categories = styled.div`
  /* background: red; */
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
  height: 100vh; /* apagar dps */
  margin: 2.5rem auto;
  border-radius: 10px;
`;

// Crio uma 'tabela' chamada categoriaM e categoriaF, que terá todas as categorias (sapatos, bolsas, camisetas, etc)
// Cada categoria vai ter uma 'imagem de capa'
// assim, caso mude as categorias no cms, o site ja capta automaticamente.

const Categoria = () => {
  return (
    <>
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

      
      <Container>Categoria</Container>
    </>
  )
}

export default Categoria;