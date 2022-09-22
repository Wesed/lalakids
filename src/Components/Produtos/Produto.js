import React from 'react';
import styled from 'styled-components';
import prod1 from '../../Assets/prod1.jpeg';
import prod2 from '../../Assets/prod2.jpeg';
import Button from './../Useful/Button';
import UseMedia from './../Useful/UseMedia';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useParams } from 'react-router-dom';
import { useQuery } from 'graphql-hooks';

const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 80%;
  background: white;
  padding: 1rem;
  margin: 2.5rem auto;
  border-radius: 10px;
  gap: 1rem;

  @media (max-width: 30rem) {
    grid-template-columns: 100%;
    max-width: 100%;
    margin: auto;
  }

`;

const SwiperConfig = styled.div`

  img {
    width: 100%;
    height: 450px;
    object-fit: cover;
    border-radius: 4px;
  }
`;

const ImgContainer = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
  gap: 1rem;
  overflow: hidden;
  height: 100%;
  width: 100%;

  img {
    max-width: 100%;
    object-fit: cover;
    border-radius: 4px;
  }

  div {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    grid-column: 1;
    gap: 1rem;
    border-radius: 4px;
  }

  img:nth-child(1) {
    grid-column: 2;
    grid-row: 1 / 3;
    max-height: 30.81rem;
  }
`;

const ProdInfo = styled.div`
  text-align: center;
`;

const Ptitle = styled.p`
  font-size: 1.125rem;
  font-weight: 700;
  /* color: ${(props) => props.theme.colors.darkGray}; */
  color: #222;
  margin-bottom: 1rem;
`;
const Pprice = styled.p`
  font-size: 2rem;
  font-weight: 900;
  color: ${(props) => props.theme.colors.blueBackground};
  margin-bottom: 1rem;

  span {
    font-weight: normal;
    color: black;
    font-size: 14px;
  }
`;

const DivSizes = styled.div`
  margin-bottom: 2rem;


  p {
    margin: 1rem 0;
    text-align: start;
  }

  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    gap: 1rem;

    button {
      padding: .8rem;
      text-decoration: none;
      /* border: 1px solid ${props => props.theme.colors.text}; */
      border: 1px solid rgba(0, 0, 0, 0.2);
      /* box-shadow: 1px 1px 5px 0.2px rgba(0, 0, 0, 0.4); */
      border-radius: 4px;
      background: transparent;
      color: black;
      cursor: pointer;
      transition: .1s;

      /* 
        Ao clicar nesse elemento, mudara o background pro azul bebe somente no item selecionado (add class active, por ex)
      */
    }
  }
`;

const DivColors = styled.div`
  margin-bottom: 2rem;

  p {
    margin: 1rem 0;
    text-align: start;
  }
  
  div {
    display: flex;
    justify-content: start;
    gap: 1rem;
    
    div {
      max-width: 58px;
      max-height: 58px;
      display: flex;
      justify-content: center;
      border: 1px solid rgba(0, 0, 0, .4);
      border-radius: 4px;
      cursor: pointer;

      img {
        max-width: 100%;
        border-radius: 4px;
      }
    }
  }
`;

const Pcard = styled.p`
  font-size: 12px;
  text-align: start;
  margin-bottom: 2rem;

  span {
    font-weight: 900;
    font-size: 14px;
  }
`;

/* 
  aula https://www.origamid.com/curso/react-completo/0606-desafio-router-2
  quando for configurar com os dados do cms
*/

const Produto = () => {
  const media = UseMedia('(max-width: 30rem)');

  //qd for true, e pq o produto tem outras cores
  const [hasColors] = React.useState(true);

  //qd for true, e pq o produto tem outros tamanhos
  const [hasSizes] = React.useState(true);

  const [imgProd, setImgProd] = React.useState(prod1);

  React.useEffect(() => {
    const getImgProd = document.querySelectorAll("#previewProd img");

    getImgProd.forEach( (item) => {
      item.addEventListener('mouseenter', (e) => {
        setImgProd(e.target.src);
  });
    });

  }, [])

  const params = useParams();


    //GRAPHQL query
    const PROJECT_QUERY = `
    query MyQuery {
      produto(filter: {id: {eq: "${params.idProd}"}}) {
        imgBackground {
              url
            }
            imgProd {
              url
            }
            priceProd
            titleProd
            size1
            size2
            size3
            size4
            size5
            size6
            size7
            size8
            size9
            size10
            size12
            size14
            size16
            size18
            size20
            size22
      }
    }
    `;
  
    const {error, data } = useQuery(PROJECT_QUERY, {
      variables: {
        limit: 100,
      },
    });
  
    if (error) return 'Ops, algo deu errado!';; 

    if (data) {

      const { produto} = data;

      let prodSize = [
        {
          size: '01',
          qtd: produto.size1
        },
        {
          size: '02',
          qtd: produto.size2
        },
        {
          size: '03',
          qtd: produto.size3
        },
        {
          size: '04',
          qtd: produto.size4
        },
        {
          size: '05',
          qtd: produto.size5
        },
        {
          size: '06',
          qtd: produto.size6
        },
        {
          size: '07',
          qtd: produto.size7
        },
        {
          size: '08',
          qtd: produto.size8
        },
        {
          size: '09',
          qtd: produto.size9
        },
        {
          size: '10',
          qtd: produto.size10
        },
        {
          size: '12',
          qtd: produto.size12
        },
        {
          size: '14',
          qtd: produto.size14
        },
        {
          size: '16',
          qtd: produto.size16
        },
        {
          size: '18',
          qtd: produto.size18
        },
        {
          size: '20',
          qtd: produto.size20
        },
        {
          size: '22',
          qtd: produto.size22
        },
        {
          size: '24',
          qtd: produto.size24
        },
      ]        

      return (
        <Container className="animeFade">
          {media ? (
            <SwiperConfig>
              <Swiper
                spaceBetween={1}
                slidesPerView={1}>
                <SwiperSlide><img src={prod1} alt="produto 1" /></SwiperSlide>
                <SwiperSlide><img src={prod2} alt="produto 1" /></SwiperSlide>
                <SwiperSlide><img src={prod1} alt="produto 1" /></SwiperSlide>
                <SwiperSlide><img src={prod2} alt="produto 1" /></SwiperSlide>
              </Swiper>
            </SwiperConfig>
          ) : (
            <ImgContainer>
              <img src={produto.imgProd[0].url} alt="imagem do produto" />
    
              <div id="previewProd">
                <img src={prod2} alt="produto 1" />
                <img src={prod1} alt="produto 2" />
                <img src={prod2} alt="produto 3" />
              </div>
            </ImgContainer>
          )}
    
          <ProdInfo>
            <Ptitle>{produto.titleProd}</Ptitle>
    
            <Pprice>
              {produto.priceProd} <span> à vista </span>
            </Pprice>

            <Pcard>
              ou 3x de <span> R$ {(produto.priceProd / 3).toFixed(2)}  </span> s/ juros
            </Pcard>
    
            {hasSizes ? (
              <DivSizes>
                <p>Tamanho:</p>
                <div>
                  {/* Arrumar uma forma de rodar o map nesse vetor.
                  Ele nao esta funcionando pq o prodSize, por ser um vet, precisa da posicao, que tem q ser
                  dinamica. Ja pensei em criar um for e o .map dentro, mas nao parece certo
                  
                  prodSize[i] tbm n funciona pq ele e instanciado depois.
                  prodSize e um vetor de objetos, portanto precisa do '.qtd'
                  
                  
                  ler bloco de notas 
                  */}
                  {prodSize[index].qtd.map((size, index) => 
                    size > 0 && <button key={index}> {prodSize.size} {size} </button>
                  )}
                </div>
              </DivSizes>
            ) : (
              <div> </div>
            )}
    
            {hasColors ? (
              <DivColors>
                <p>Cores:</p>
                <div>
                  {/* aq aparece miniaturas das outras cores, q vira pelo graphQL */}
                  <div onClick={ ()=> {setImgProd(prod1)}}>
                    {" "}
                    <img src={prod1} alt="img produto" />{" "}
                  </div>
                  <div onClick={ ()=> {setImgProd(prod2)}}>
                    {" "}
                    <img src={prod2} alt="img produto" />{" "}
                  </div>
                  <div onClick={ ()=> {setImgProd(prod1)}}>
                    {" "}
                    <img src={prod1} alt="img produto" />{" "}
                  </div>
                  <div onClick={ ()=> {setImgProd(prod2)}}>
                    {" "}
                    <img src={prod2} alt="img produto" />{" "}
                  </div>
                </div>
              </DivColors>
            ) : (
              <div> </div>
            )}

            <Button> comprar </Button>
          </ProdInfo>
        </Container>
          );
    }

      return false;
}

export default Produto;