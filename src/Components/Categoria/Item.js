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
  const [img, setImg] = React.useState(prod.imgProd[0].url);
  const [likeBtn, setLikeBtn] = React.useState(<Like />);

  /* pega o elemento do proj, converte em json, dps em obj 
     assim para de dar erro quando houver valores 'null' no imgBackground
  */
  let obj = JSON.parse(JSON.stringify(prod.imgBackground));

  // if(obj != null) {
  //   console.log(obj.url);
  // } else {
  //     obj = 'Vazio';
  //     console.log('aqui', obj);
  // }

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

        prodContent.forEach((item) =>
          item.addEventListener("mouseenter", (e) => {
            span = item.children[0].getAttribute("value");

            /* 
              Se houver o atributo background, significa que prod.imgBackground nao e null (contem algo), e portanto trpca a img,
            */
            if (item.children[1].getAttribute("background")) {
              item.children[1].setAttribute("src",item.children[1].getAttribute("background"));
            }
          })
        );

        prodContent.forEach((item) =>
          item.addEventListener("mouseleave", (e) => {
            item.children[1].setAttribute("src", span);
          })
        );
      }, []);

    // React.useEffect(() => {
    //   const prodImg = document.querySelectorAll(".prod img");

    //   prodImg.forEach((item) =>
    //     item.addEventListener("mouseenter", (e) => {
    //       setTeste(e.target.src);
    //       console.log("in", teste);
    //       // console.log('aq', e.target.src);
    //       item.setAttribute(
    //         "src",
    //         "https://scontent.fpoo2-1.fna.fbcdn.net/v/t39.30808-6/307175789_3309818689264803_1742272490401101678_n.jpg?stp=dst-jpg_s600x600&_nc_cat=104&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=bzvPnMCEsPYAX-2FnZJ&_nc_ht=scontent.fpoo2-1.fna&oh=00_AT8o7uiLUAIvJynzCRsMyzeqbli-GMiLxdyIleTEQzamsg&oe=63290AD9"
    //       );

    //       item.addEventListener("mouseleave", (e) => {
    //         console.log("out", teste);
    //         item.setAttribute("src", img);
    //       });
    //     })
    //   );
    // }, [teste, img]);

  // React.useEffect(() => {
  //   let img = prod.imgProd[0].url;
  //   const prodImg = document.querySelectorAll('.prod img')
  //   let imgCache = 0;

  //   prodImg.forEach((item) => 
  //     item.addEventListener('mouseenter', (e) => {
  //       console.log('aq', imgCache);
  //       // console.log('aq', e.target.src);
  //       item.setAttribute('src', 'https://scontent.fpoo2-1.fna.fbcdn.net/v/t39.30808-6/307175789_3309818689264803_1742272490401101678_n.jpg?stp=dst-jpg_s600x600&_nc_cat=104&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=bzvPnMCEsPYAX-2FnZJ&_nc_ht=scontent.fpoo2-1.fna&oh=00_AT8o7uiLUAIvJynzCRsMyzeqbli-GMiLxdyIleTEQzamsg&oe=63290AD9');

  //     item.addEventListener('mouseleave', (e) => {
  //       console.log('leave', imgCache);
  //       item.setAttribute('src', img);
  //     })  
  // }));

  // }); 

  // console.log(prod);

  // if(prod.imgBackground == null) {
  //   console.log('null');
  // } else {
  //   console.log(prod.imgBackground.url);
  // }
  
  React.useEffect( () => {
    if(favorite === true) {
      setLikeBtn(<Liked />);
    } else {
      setLikeBtn(<Like />);
    }
  }, [favorite]);


  // console.log(prod.imgBackground);

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

        <ImgProd className="prod">
          <span style={{'display':'none'}} value={prod.imgProd[0].url}></span>

          {/* <img src={prod.imgProd[0].url} background={prod.imgBackground.url} alt="foto do produto" /> */}


            {prod.imgBackground 
            ?
              <>
                <img src={prod.imgProd[0].url} background={prod.imgBackground.url} alt="foto do produto" />
              </>
            : 
            <>
              <img src={prod.imgProd[0].url} alt="foto do produto" />
            </>
            }

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
