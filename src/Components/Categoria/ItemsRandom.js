import React from "react";
import styled from "styled-components";

import { ReactComponent as Like } from "../../Assets/heart.svg";

import { ReactComponent as Liked } from "../../Assets/heartLiked.svg";

// import {ReactComponent as Liked} from '../../Assets/heartLiked.svg';
import { Link } from 'react-router-dom';
import FormatPrice from './../Useful/FormatPrice';
import UseMedia from './../Useful/UseMedia';

// responsavel por cada item (produto) )

const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  transition: ease 0.3s;

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
  border-radius: 4px;
  overflow: hidden;
  text-align: center;
  height: 250px;
  box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.1);

  @media (max-width: 30rem) {
    height: 200px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 4px;
  }

  span {
    position: absolute;
    width: 100%;
    padding: 0.3rem;
    background: ${(props) => props.theme.colors.degrade};
    font-size: 0.9rem;
    color: white;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0%;
    opacity: 0;
    transition: .3s;
  }
`;

const ProdInfo = styled.div`
  text-align: left;
  padding: 0 0.5rem;
`;

const Ptitle = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.text};
  margin-bottom: .5rem;
  opacity: .8;
`;

const Pprice = styled.p`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: ${props => props.theme.colors.blueBackground};
`;

const Pcard = styled.div`
  font-size: 12px;
  color: black;
  font-weight: 700;
`;

const ItemRandom = ({ prod }) => {
  const [favorite, setFavorite] = React.useState(false);
  const [formatUrl, setFormatUrl] = React.useState(prod.titleProd);
  const media = UseMedia('(max-width: 30rem)');


  return (
    <Card>

      <button onClick={() => {setFavorite(!favorite)}}> {favorite ? <Liked/> : <Like/>} </button>

      <Link to={`/${formatUrl}/${prod.id}`} onLoad={() => {setFormatUrl(formatUrl.toLowerCase().replace(" ", "-"))}}>

        <ImgProd className="prod">
          <span style={{'display':'none'}} value={prod.imgProd[0].url}></span>

          {/* se for true, tem img de fundo, portanto cria-se o atributo background e realiza o efeito */}
          {prod.imgBackground 
          ?
            <img src={prod.imgProd[0].url} background={prod.imgBackground.url} alt="foto do produto" />
          : 
            <img src={prod.imgProd[0].url} alt="foto do produto" />
          }

          <span> Mais Detalhes </span>

        </ImgProd>
        
        <ProdInfo>
          {
            media 
            ?
            <></>
            :
            <Ptitle>{prod.titleProd}</Ptitle>
          }
          <Pprice>
            R$ {<FormatPrice getPrice={prod.priceProd}/>} 
          </Pprice>
          <Pcard>
            <span> 3x de R$ {(prod.priceProd / 3).toFixed(2)}  </span> 
          </Pcard>
        </ProdInfo>
        
      </Link>
    </Card>
  );
};

export default ItemRandom;
