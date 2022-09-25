import React from 'react';
import styled from 'styled-components';
import Button from './../Useful/Button';
import UseMedia from './../Useful/UseMedia';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Mousewheel } from "swiper";
import "swiper/css/navigation";
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
  gap: 1rem;
  height: 100%;
  width: 100%;
  overflow: hidden;

  img {
    max-width: 100%;
    object-fit: cover;
    border-radius: 4px;
  }

  img:nth-child(1) {
    grid-column: 2;
    grid-row: 1 / 3;
    max-width: 100%;
    max-height: 30.81rem;
  }
`;

const SwiperDesktop = styled.div`
  height: 75%;

  div {
    position: relative;
    max-width: 100%;
    max-height: 100%;
    
    img {
      cursor: pointer;
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

      input[type="radio"] {
        // o absolute e pra ele nao ocupar espaço
        opacity: 0;
        position: absolute;
      };

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

const Produto = () => {
  const media = UseMedia('(max-width: 30rem)');

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

  const [imgProd, setImgProd] = React.useState("");

  const [radio, setRadio] = React.useState(false);


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

    function handleClick({target}) {

      target.checked && target.closest('[name="label-radio-size"]').classList.add('radio-active');
      
      target.addEventListener('focusout', () => {
        target.checked && target.closest('[name="label-radio-size"]').classList.remove('radio-active');
      });

      // vai armazenar o atual tam. selecionado
      setRadio(target.innerText);
    }
  
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
            <SwiperMobile>
              <Swiper spaceBetween={1} slidesPerView={1}>
                {produto.imgProd.map((prod, index) => (
                  <SwiperSlide key={index}>
                    <img src={prod.url} alt={"produto" + index} />
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
                  slidesPerView={"auto"}
                  spaceBetween={30}
                  pagination={{
                    clickable: true,
                  }}
                  navigation = {true}
                  mousewheel={true}
                  // navigation={true}
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
              {produto.priceProd} <span> à vista </span>
            </Pprice>

            <Pcard>
              ou 3x de <span> R$ {(produto.priceProd / 3).toFixed(2)} </span> s/
              juros
            </Pcard>

            <DivSizes>
              <p>Tamanhos disponíveis:</p>
              <div>
                {prodSize.map(
                  (size, index) =>
                    // exibe apenas os tamanhos disponiveis. Evita que apareça varios tamanhos (1 ao 22)
                    size.qtd > 0 && (
                      <label
                        name="label-radio-size"
                        key={index}
                        onClick={handleClick}
                      >
                        {" "}
                        {size.size}
                        <input type="radio" name="input-radio-size" />
                      </label>
                    )
                )}
              </div>
            </DivSizes>

            {/* <DivColors>
                <p>Cores:</p>
                <div>
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
            </DivColors> */}

            <Button> comprar </Button>
          </ProdInfo>
        </Container>
      );
    }

    return false;
}

export default Produto;