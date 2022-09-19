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


  /* :hover {
    transform: scale(1.05);
  } */

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
  overflow: hidden;
  text-align: center;
  height: 330px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
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
  margin-bottom: 1.5rem;
`;
const Pprice = styled.p`
  font-size: 24px;
  font-weight: 700;
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
    font-weight: 700;
    font-size: 14px;
    color: ${(props) => props.theme.colors.blueBackground};
  }
`;

const Item = ({ prod }) => {
  const [favorite, setFavorite] = React.useState(false);
  const [img, setImg] = React.useState(prod.imgProd[0].url);
  const [likeBtn, setLikeBtn] = React.useState(<Like />);


  /* GAMBIARRA: no mousein, muda a img corretamente, porem no mouseleave, seta a img do ultimo produto carregado, ja que 
    é o valor atual do state. Nao consegui encontrar uma maneira de armazenar somente o target, ja que a var que receber o state
    recebe todos os valores de state. e seu valor sempre será o do ultimo produto. 
    EX: se receber 3 elementos (1, 2, 3), o valor atual sempre sera 3, pois foi o ultimo que receberu
    Por isso, criei um elemento invisivel dentro do prodImg que recebe o mesmo valor de img, e como nao é alterado,
    consegue manter o valor pra ser recuperado dps no leave.
  */
      React.useEffect(() => {
        const prodContent = document.querySelectorAll(".prod");
        let span = false;
        let spanHover = false;

        prodContent.forEach((item) =>
          item.addEventListener("mouseenter", (e) => {
            // children 0 : span ; children 1 : img
            span = item.children[0].getAttribute("value"); 

            //Se houver o atributo background, significa que prod.imgBackground nao e null (contem algo), e portanto troca a img,
            if (item.children[1].getAttribute("background")) {
              item.children[1].setAttribute("src", item.children[1].getAttribute("background"));
            }      

            item.children[2].style.opacity = '1';

          })
        );

        prodContent.forEach((item) =>
          item.addEventListener("mouseleave", (e) => {
            /* o prodImg passa por todas as imagens, portanto quando troca no setAtribute, perde a referencia
               mesmo salvando o valor numa variavel (let valor = prod.img[0].url), vai guardar o valor da ultima img carregada
              o span guarda esse valor, e como nunca e atualizado, seu valor continua intacto
            */
            item.children[1].setAttribute("src", span);
            item.children[2].style.opacity = '0';
          })
        );
      }, []);

  React.useEffect( () => {
    if(favorite === true) {
      setLikeBtn(<Liked />);
    } else {
      setLikeBtn(<Like />);
    }
  }, [favorite]);


  return (
    <Card>

      <button onClick={() => {setFavorite(!favorite)}}> {likeBtn} </button>

      <Link to={`/${prod.titleProd}`}>

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
