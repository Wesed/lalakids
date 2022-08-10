import React from 'react';
import styled from 'styled-components';
import prod1 from '../../Assets/prod1.webp';
import prod2 from '../../Assets/prod2.webp';
import Button from './../Useful/Button';

const Container = styled.section`
  border: 1px solid red;
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 80%;
  background: white;
  padding: 1rem;
  margin: 2.5rem auto;
  border-radius: 10px;
  gap: 1rem;

  @media (max-width: 30rem) {
    grid-template-columns: 1fr;
    max-width: 100%;
  }
`;

const ImgContainer = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
  gap: 1rem;
  overflow: hidden;
  height: 100%;
  border: 1px solid lime;
  max-width: 100%;

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
    width: 100%;
  }

  @media (max-width: 30rem) {
    max-width: 100%;
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

const DivSizes = styled.div`
  /* border: 1px solid rgba(0, 0, 0, 0.5); */
  margin-bottom: 2rem;


  p {
    margin: 1rem 0;
    text-align: start;
  }

  div {
    display: flex;
    justify-content: start;
    gap: 1rem;

    button {
      padding: .8rem;
      text-decoration: none;
      /* border: 1px solid ${props => props.theme.colors.text}; */
      border: 2px solid transparent;
      box-shadow: 1px 1px 5px 0.2px rgba(0, 0, 0, 0.4);
      border-radius: 4px;
      background: transparent;
      cursor: pointer;
      transition: .1s;

      :hover {
        border: 2px solid #222;
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

  }); 

    /* 
    
      NOTA DE MELHORIA: Estudar use effect e entender como ele funciona
    */


  return (
    <Container className="animeFade">

      <ImgContainer>
        <img className="animeFade" src={imgProd} alt='imagem do produto' 
        onMouseLeave={() => {setImgProd(prod1)}}/>

        <div id="previewProd">
          <img src={prod2} alt='produto 1' />
          <img src={prod1} alt='produto 2' />
          <img src={prod2} alt='produto 3' />
        </div>
      </ImgContainer>

      <ProdInfo>
        <Ptitle>Calça Moletom jogger masculina summer</Ptitle>
        
        <Pprice>
            R$ 129,90 <span> à vista </span>
        </Pprice>

        {hasSizes ? 
          <DivSizes>
            <p>Tamanho:</p>
            <div>
              <button> 08 </button>
              <button> 10 </button>
              <button> 12 </button>
              <button> 14 </button>
              <button> 16 </button>
              <button> 18 </button>
              <button> 20 </button>
              <button> 22 </button>
            </div>
          </DivSizes>
        :
        <div> </div>}

        {hasColors ? 
          <DivColors>
            <p>Cores:</p>
            <div>
              {/* aq aparece miniaturas das outras cores, q vira pelo graphQL */}
              <div> <img src={prod1} alt='img produto' /> </div>
              <div> <img src={prod2} alt='img produto' /> </div>
              <div> <img src={prod1} alt='img produto' /> </div>
              <div> <img src={prod2} alt='img produto' /> </div>
            </div>
          </DivColors>
        :
        <div> </div>}

        <Pcard>
            ou 3x de <span> R$ 43,30 </span> s/ juros
        </Pcard>

        <Button> comprar </Button>
      </ProdInfo>

    </Container>
  )
}

export default Produto;