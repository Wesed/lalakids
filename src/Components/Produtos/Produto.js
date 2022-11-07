import React from 'react';
import styled from 'styled-components';
import Button from './../Useful/Button';
import UseMedia from './../Useful/UseMedia';
import { UserContext } from './../UserContext';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Mousewheel } from "swiper";
import "swiper/css/navigation";
import 'swiper/css';
import { useParams} from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';

import { ReactComponent as Like } from "../../Assets/heart.svg";

import { ReactComponent as Liked } from "../../Assets/heartLiked.svg";
import FormatPrice from '../Useful/FormatPrice';
import useUpdate from './../Hooks/useUpdate';

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

const SwiperMobile = styled.div`
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
  justify-content: space-between;
  gap: 1rem;
  overflow: hidden;
  height: 31rem;

  img {
    max-width: 100%;
    object-fit: cover;
    border-radius: 4px;
  }

  img:nth-child(1) {
    grid-column: 2;
    grid-row: 1 / 3;
    max-width: 100%;
  }
`;

const SwiperDesktop = styled.div`
  height: 31rem;

  div {
    max-width: 100%;
    max-height: 100%;

    img {
      max-width: 100%;
      max-height: 100%;
      object-fit: cover;
      cursor: pointer;
      transform: scale(0.9);
      transition: 0.1s;

      :hover {
        transform: scale(1);
      }
    }
  }

  .swiper-button-prev,
  .swiper-button-next {
    position: absolute;
    transform: rotate(90deg);
    left: 2rem;
  }

  .swiper-button-prev {
    top: 1rem;
  }

  .swiper-button-next {
    top: 27.5rem;
  }
`;

const ProdInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem 0;
  text-align: center;
`;

const Ptitle = styled.h1`
  font-size: 1.25rem;
  font-weight: 500;
  /* color: ${(props) => props.theme.colors.darkGray}; */
  color: #222;
  text-align: left;
`;

const Pprice = styled.p`
    color: black;
    font-size: 14px;
    text-align: left;
    margin-bottom: -1rem;

  span {
    font-size: 1.625rem;
    font-weight: 900;
    color: ${(props) => props.theme.colors.blueBackground};
  }
`;

const Pcard = styled.p`
  font-size: 14px;
  opacity: .8;
  text-align: left;

  span {
    font-weight: 700;
    font-size: 14px;
  }
`;

const DivSize = styled.div`

  input[type="radio"]:checked + label{
    background: rgba(14, 214, 229, .2) 
  }

  input[type="radio"] {
        // o absolute e pra ele nao ocupar espaço
        opacity: 0;
        position: absolute;
  };

  p {
    font-size: 16px;
    margin: 1rem 0;
    text-align: start;
  }

  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    gap: 1rem;

    label {
      padding: .8rem;
      text-decoration: none;
      /* border: 1px solid ${props => props.theme.colors.text}; */
      border: 1px solid rgba(0, 0, 0, 0.2);
      /* box-shadow: 1px 1px 5px 0.2px rgba(0, 0, 0, 0.4); */
      border-radius: 4px;
      background: transparent;
      color: black;
      cursor: pointer;
      transition: .2s;

      :hover {
        border: 1px solid ${props => props.theme.colors.blueBackground};
      }
    }
    
  }
`;

const DivOrder = styled.div`
  background-color: rgba(14, 214, 229, 0.2);
  font-size: 14px;
  padding: .5rem;
  border-radius: 4px;
  text-align: left;

  span {
    font-weight: 700;
  }
`;

const DivColors = styled.div`
  text-align: left;
  margin-bottom: 1rem;

  input[type="radio"]:checked + label{
    border: 2px solid ${props => props.theme.colors.blueBackground};
  }

  input[type="radio"] {
        // o absolute e pra ele nao ocupar espaço
        opacity: 0;
        position: absolute;
  };


    div {
      display: flex;
      gap: 0 1rem;
      margin-top: .5rem;

      img {
        height: 60px;
        max-width: 100%;
        object-fit: cover;
        cursor: pointer;
        border-radius: 4px;
      }

      label {
        border-radius: 4px;
        background: transparent;
        transition: .1s;
        height: 60px;
        overflow: hidden;

        :hover {
          border: 1px solid ${(props) => props.theme.colors.blueBackground};
          transform: scale(1.1);
        }
    }
    }
`;

const DivBtn = styled.div`
  display: flex;

  div {
    display: flex;
    padding: .5rem 0.6rem;
    margin-right: 1rem;
    box-shadow: 0 1px 4px -1px rgba(0, 0, 0, 50%);
    border-radius: 4px;

    button {
      cursor: pointer;
      border: 1px solid transparent;
      background: transparent;

      svg {
        width: 30px;
        height: 30px;
        opacity: .8;
      }
    }
  }
`;


const Produto = () => {
  const media = UseMedia('(max-width: 30rem)');

  const params = useParams();

  const PROJECT_QUERY = gql`
  query MyQuery {
    produto(filter: {id: {eq: "${params.idProd}"}}) {
      imgBackground {
            url
          }
          imgProd {
            url
          }
          colors {
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
          id
    }
  }
  `;

  const {error, data } = useQuery(PROJECT_QUERY, {
    variables: {
      limit: 100,
    },
  });

  const [imgProd, setImgProd] = React.useState("");
  const [radioSize, setRadioSize] = React.useState();
  const [radioColor, setRadioColor] = React.useState('padrao');
  const [order, setOrder] = React.useState();
  const { removeFavorite, addFavorite, toLogin } = useUpdate();
  const [favorite, setFavorite] = React.useState(JSON.parse(params['*']));
  const {dataContext, login, loadingContext} = React.useContext(UserContext);

   /* muda a img ao clicar nas miniaturas */
    React.useEffect(() => {

      // seta a img somente na 1x que entra no useEffect
      data && imgProd === "" && setImgProd(data.produto.imgProd[0].url);

        const getImgProd = document.querySelectorAll("#previewProd div img");
        getImgProd.forEach( (item) => {
          item.addEventListener('click', (e) => {
            setImgProd(e.target.src);
      });
        });  
    }, [imgProd, data])

    /* 
      caso eu add isso em handleClick, a 1x nao funcionaria, ja que order ainda nao estava setado, assim
      o useEffect vai executar sempre que order alterar, ou seja, qd ja tiver um pedido
    */

    React.useEffect(()=>{
      order && window.open("https://wa.me/553597069757?text=Olá! Estou interessado nesse produto! Poderia me dar mais informações? " + order + '  ' + window.location.href);
    }, [order]);

    const handleClick = () => {
      if (radioSize) {
        if (data) {
          const prod = data.produto.titleProd + ', preco: ' + data.produto.priceProd + ', tamanho: ' + radioSize + ', cor: ' + radioColor;
          setOrder(prod);
        }
      } else {
        alert('Ops, esqueceu a numeração!');
      }
    };

    if (error) return 'Ops, algo deu errado!';

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
            <SwiperMobile>
              <Swiper spaceBetween={1} slidesPerView={1}>
                {produto.imgProd.map((prod, index) => (
                  <SwiperSlide key={index}>
                    <img src={imgProd} alt={"produto" + index} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </SwiperMobile>
          ) : (
            <ImgContainer>
              <img src={imgProd} alt="imagem do produto" />

              <SwiperDesktop>
                <Swiper
                  direction={"vertical"}
                  slidesPerView={'auto'}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  mousewheel={true}
                  modules={[Navigation, Mousewheel]}
                  id="previewProd"
                >
                  {produto.imgProd.map((prod, index) => (
                    <SwiperSlide key={index}>
                      <img src={prod.url} alt={"produto " + (index + 1)} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </SwiperDesktop>
            </ImgContainer>
          )}

          <ProdInfo>
            <Ptitle>{produto.titleProd}</Ptitle>

            <Pprice>
              por<span> R$ <FormatPrice getPrice={produto.priceProd}/> </span>
            </Pprice>

            <Pcard>
              ou 3x de <span> R$ {(produto.priceProd / 3).toFixed(2)} </span> s/
              juros
            </Pcard>

            <DivSize>
              <p>Tamanhos disponíveis:</p>
              <div>
                {prodSize.map((size, index) =>
                  // exibe apenas os tamanhos disponiveis. Evita que apareça varios tamanhos (1 ao 22)
                  size.qtd > 0 && 
                    <div key={index}>
                      <input type="radio" id={"radio-size" + index} name="input-radio-size" />
                      <label name="label-radio" htmlFor={"radio-size" + index} onClick={({target}) => {setRadioSize(target.innerText)}}>
                        {size.size}
                      </label> 
                    </div> 
                )}
              </div>
            </DivSize>

            <DivOrder>
              Não tem o seu tamanho? <span> Faça um pedido!</span>
            </DivOrder>

            {produto?.colors.length > 0 &&
            <DivColors>
              <p>Cores:</p>
              <div>
                {produto?.colors.map((prod, index) =>
                  <div key={index}>
                    <input type="radio" id={"radio-color" + index} name="input-radio-color" />
                    <label name="label-radio" htmlFor={"radio-color" + index} 
                      onClick={({target}) => {setRadioColor(target.src); setImgProd(target.src)}}>
                        <img src={prod.url} alt="variação do produto"/>
                    </label> 
                  </div>  
                )}
            </div>
            </DivColors>
            }
            {/* favorito */}
            <DivBtn>
              <div>
              {
                favorite && login?
                  <button onClick={()=>{removeFavorite(dataContext, dataContext.userClient.id, produto.id, setFavorite)}}><Liked/></button>
              :

              <>
              {
                login && !favorite ?
                  <button onClick={()=>{addFavorite(dataContext, dataContext.userClient.id, produto.id, setFavorite)}}><Like/></button>
                :
                  <button onClick={()=>{toLogin(login)}}><Like/></button>
              }
              </>
              }
              </div>
              <Button onClick={handleClick}> comprar </Button>
            </DivBtn>
          </ProdInfo>
        </Container>
      );
    }

    return false;
}

export default Produto;