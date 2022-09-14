import React from "react";
import styled from "styled-components";

import { ReactComponent as Like } from "../../Assets/heart.svg";

import { ReactComponent as Liked } from "../../Assets/heartLiked.svg";

// import {ReactComponent as Liked} from '../../Assets/heartLiked.svg';
import { Link } from 'react-router-dom';

// responsavel por cada item (produto) )

const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  transition: ease 0.3s;

  :hover {
    transform: scale(1.05);
  }

  @media (max-width: 30rem) {
    width: initial;
    height: initial;
  }

  a {
    text-decoration: none;
  }

  button {
    position: absolute;
    z-index: 999;
    left: 0.8rem;
    top: 0.8rem;
    border: 1px solid transparent;
    background: transparent;
    cursor: pointer;
  }

`;

const ImgProd = styled.div`
  position: relative;
  margin-bottom: 1rem;
  border-radius: 10px;
  /* overflow: hidden; */
  text-align: center;
  height: 330px;


  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }


  :hover {
    :before {
      content: "+ Mais detalhes";
      position: absolute;
      width: 100%;
      padding: 0.3rem;
      background: ${(props) => props.theme.colors.degrade};
      font-size: 0.9rem;
      color: white;
      left: 50%;
      transform: translateX(-50%);
      bottom: 0%;
    }
  }
`;

const ProdInfo = styled.div`
  text-align: center;
  padding: 0 0.5rem;
`;

const Ptitle = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.text};
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

const Pcard = styled.p`
  font-size: 12px;
  color: black;

  span {
    font-weight: 900;
    font-size: 14px;
    color: ${(props) => props.theme.colors.blueBackground};
  }
`;

const Item = ({ prod }) => {
  const [favorite, setFavorite] = React.useState(false);

  const [likeBtn, setLikeBtn] = React.useState(<Like />);

  React.useEffect( () => {
    if(favorite === true) {
      setLikeBtn(<Liked />);
    } else {
      setLikeBtn(<Like />);
    }
  }, [favorite]);

  console.log('produto: ', prod);

  return (
    <Card>
      {/* 
        o nome do produto vem do GraphQL e seta aq, no component categoria: 
        1. pega o nome do produto usando useParams
        2. faz uma busca no GrapQL
        3. seta as infos 
      */}

      {/* Ao recarregar a pagina, a informacao sobre quais produtos foram curtidos devem permanecer, pra isso e necessario que essa informacao seja carregada junto aos produtos, talvez uma especie INNER JOIN entre os produtos e os favoritos */}
      <button onClick={() => {setFavorite(!favorite)}}> {likeBtn} </button>

      <Link to={`/${prod.titleProd}`}>

        <ImgProd>
          <img src={prod.imgProd[0].url} alt="foto do produto" />
        </ImgProd>

        <ProdInfo>
          <Ptitle>{prod.titleProd}</Ptitle>
          <Pprice>
            R$ {prod.priceProd} <span> à vista </span>
          </Pprice>
          <Pcard>
            ou 3x de <span> R$ {(prod.priceProd / 3).toFixed(2)} </span> s/ juros
          </Pcard>
        </ProdInfo>
        
      </Link>
    </Card>
  );
};

export default Item;
