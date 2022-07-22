import React from 'react';
import styled from 'styled-components';

import {ReactComponent as Like} from '../../Assets/heart.svg';
// import {ReactComponent as Liked} from '../../Assets/heartLiked.svg';

// responsavel por cada item (produto) )

const Card = styled.div`
  width: 13rem;
  height: 23rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 30rem) {
    width: initial;
    height: initial;


    img {
      width: 100%;
      height: 197px;
    }
  }
`;

const ImgProd = styled.div`
  position: relative;
  height: 15.31rem;
  margin-bottom: 1rem;
  border-radius: 4px;
  overflow: hidden;

  button {
    position: absolute;
    left: .8rem;
    top: .8rem;
    border: 1px solid transparent;
    background: transparent;
    cursor: pointer;
  }

  img {
    max-width: 100%;
    object-fit: cover;
  }
`;

const ProdInfo = styled.div`
  text-align: center;
  padding: 0 .5rem;
`;

const Ptitle = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: ${props => props.theme.colors.text};
  margin-bottom: 1rem;
`;
const Pprice = styled.p`
  font-size: 18px;
  font-weight: 900;
  margin-bottom: .5rem;
  color: ${props => props.theme.colors.blueBackground};

  span {
    font-weight: normal;
    color: black;
    font-size: 14px;
  }
`;

const Pcard = styled.p`
  font-size: 12px;

  span {
    font-weight: 900;
    font-size: 14px;
  }
`;

const Item = ({prod}) => {

  return (
    <Card>

      <ImgProd>
        <button> <Like /> </button>
        <img src={prod} alt="foto do produto" />
      </ImgProd>

      <ProdInfo>
        <Ptitle>Calça Moletom jogger masculina summer</Ptitle>
        <Pprice>R$ 129,90 <span> à vista </span></Pprice>
        <Pcard>ou 3x de <span> R$ 43,30 </span> s/ juros</Pcard>
      </ProdInfo>

    </Card>
  )
}

export default Item;