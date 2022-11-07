import React from "react";
import styled from "styled-components";
import { UserContext } from './../UserContext';
import { ReactComponent as Like } from "../../Assets/heart.svg";
import { ReactComponent as Liked } from "../../Assets/heartLiked.svg";
import { Link} from 'react-router-dom';
import FormatPrice from './../Useful/FormatPrice';
import useUpdate from './../Hooks/useUpdate';
import Skeleton from "../Useful/Skeleton";

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
  height: 300px;
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

  @media (max-width: 30rem) {
    font-size: 18px;
  }
`;

const Pcard = styled.div`
  font-size: 14px;
  color: black;

  p {
    margin: .3rem 0;
  }

  span {
    font-weight: 900;
    font-size: 14px;
  }
`;

const Item = ({ prod }) => {
  const [favorite, setFavorite] = React.useState(false);
  const {dataContext, login, loadingContext} = React.useContext(UserContext);
  const { removeFavorite, addFavorite, toLogin } = useUpdate();

  // dataContext && console.log('aa', dataContext.userClient.favorite);

  /* efeito ao passar o mouse sobre o iten*/
    React.useEffect(() => {
        const prodContent = document.querySelectorAll(".prod");
        let span = false;

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
    }, [dataContext]);

    /* verifica se o item em questao esta na lista de favoritos*/
    React.useEffect(()=>{
      const favoriteFound = dataContext?.userClient.favorite.find((favorite) => {
        return favorite.codeProd === prod.id;
      });

      favoriteFound && setFavorite(true);

    }, [dataContext, prod.id]);

  return (
    <Card>
      {
        favorite ?
        <button onClick={()=>{removeFavorite(dataContext, dataContext.userClient.id, prod.id, setFavorite)}}><Liked/></button>
        :

        <>
          {
            login && !favorite ?
            <button onClick={()=>{addFavorite(dataContext, dataContext.userClient.id, prod.id, setFavorite)}}><Like/></button>
            :
            <button onClick={()=>{toLogin(login)}}><Like/></button>
          }
        </>
      }
      
      <Link to={`/${prod.titleProd.toLowerCase().replace(" ", "-")}/${prod.id}/${favorite}`}>

        <ImgProd className="prod">
          <span style={{'display':'none'}} value={prod.imgProd[0].url}></span>

          {prod.imgBackground 
          ?
            <Skeleton src={prod.imgProd[0].url} background={prod.imgBackground.url} alt="foto do produto"/>
          : 
            <Skeleton src={prod.imgProd[0].url} alt="foto do produto"/>
        }

          <span> Mais Detalhes </span>

        </ImgProd>
        
        <ProdInfo>
          <Ptitle>{prod.titleProd}</Ptitle>
          <Pprice>
            R$ {<FormatPrice getPrice={prod.priceProd}/>} <span> à vista </span>
          </Pprice>
          <Pcard>
            <p>em até</p> 
            <span> 3x de R$ {(prod.priceProd / 3).toFixed(2)}  </span> 
            <p>sem juros</p>
          </Pcard>
        </ProdInfo>
        
      </Link>
    </Card>
  );
};

export default Item;
