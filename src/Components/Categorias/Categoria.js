import React from 'react';
import styled from 'styled-components';
import prod1 from '../../Assets/prod1.webp';
import prod2 from '../../Assets/prod2.webp';
import Button from './../Useful/Button';

const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 80%;
  background: white;
  padding: 1rem;
  margin: 2.5rem auto;
  border-radius: 10px;
  gap: 1rem;
`;

const ImgContainer = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
  gap: 1rem;
  overflow: hidden;

  img {
    max-width: 100%;
    object-fit: cover;
  }

  div {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    grid-column: 1;
  }

  img:nth-child(1) {
    grid-column: 2;
    grid-row: 1 / 3;
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
  font-size: 18px;
  font-weight: 900;
  margin-bottom: 0.5rem;
  color: ${(props) => props.theme.colors.blueBackground};

  span {
    font-weight: normal;
    color: black;
    font-size: 14px;
  }
`;

const DivColor = styled.div``;

const DivSize = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.5);
  div {
    display: flex;
    justify-content: space-between;

    button {
      padding: 1rem;
      text-decoration: none;
      border: 1px solid black;
      background: transparent;
      cursor: pointer;
    }
  }
`;

const Pcard = styled.p`
  font-size: 12px;

  span {
    font-weight: 900;
    font-size: 14px;
  }
`;

/* 
  aula https://www.origamid.com/curso/react-completo/0606-desafio-router-2
  quando for configurar com os dados do cms
*/

const Categoria = () => {
  //qd for true, e pq o produto tem outras cores ou tamanhos (roupa)
  const [hasOption] = React.useState(true);

  return (
    <Container>

      <ImgContainer>
        <img src={prod1} alt='img produto' />

        <div>
          <img src={prod2} alt='img produto' />
          <img src={prod2} alt='img produto' />
          <img src={prod2} alt='img produto' />
        </div>
      </ImgContainer>

      <ProdInfo>
        <Ptitle>Calça Moletom jogger masculina summer</Ptitle>
        
        <Pprice>
            R$ 129,90 <span> à vista </span>
        </Pprice>

        {hasOption ? 
        <div>

          <DivSize>
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
          </DivSize>

          <DivColor>
            <p>Cor:</p>
          </DivColor>
        
        </div>
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

export default Categoria;