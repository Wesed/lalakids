import React from 'react';
import styled from 'styled-components';
import {ReactComponent as UserLogout} from "../../Assets/userLogout.svg";
import {ReactComponent as Arow} from "../../Assets/arow.svg";
import { UserContext } from './../UserContext';
import { Link } from 'react-router-dom';

const Container = styled.div`
  z-index: 1000;
  position: absolute;
  top: 0; left: 0;
  width: 100vw;
  height: 100%;
`;

const Background = styled.div`
  position: absolute;
  z-index: 998;
  top: 0; left: 0;
  width: 100vw;
  height: calc(100vh + 100%);
  background: rgba(0, 0, 0, 0.4);
`;

const Menu = styled.div`
  position: relative;
  z-index: 999;
  background: white;
  width: 80%;
  height: 100%;
  box-shadow: 2px 0 15px 5px rgba(0, 0, 0, .2);
`;

const Header = styled.div`
  width: 100%;
  height: 71px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .5rem;
  gap: .5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  div {
    
    svg {
      top: 1.6rem !important;
      position: relative;
      width: 50px !important;
      height: 50px !important;
    }
  }

  a {
    color: black;
    font-weight: 700;
    text-decoration: none;
  }

  div:nth-child(2) {
    /* border: 1px solid red; */
    display: flex;
    width: min-content;
    flex-direction: column;
    gap: .3rem;
    text-align: left;
    font-size: .8rem;

    p:first-child {
      font-weight: 700;
      color: black;
    }

    p:nth-child(2) {
      opacity: .8;
    }
  }

`;

const ButtonLogout = styled.button`
  position: absolute;
  right: -3.5rem;
  color: ${props => props.theme.colors.text};
  padding: .3rem .7rem;
  font-size: 1.5rem;
  width: min-content;
  border: 1px solid transparent;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 1) !important;
  box-shadow: 1px 3px 10px 1px rgba(0, 0, 0, 0.3);  
`;

const ProfileImg = styled.div`
  width: 62px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ListCategory = styled.div`
  overflow-y: scroll;
  text-align: left;
  height: 100%;

  p {
    padding: .65rem;
    font-weight: 700;
    font-size: 1rem;
    color: ${props => props.theme.colors.text};
    background: ${props => props.theme.colors.grayBackground};
  }

  li {
      display: flex;
      justify-content: space-between;
      font-size: .875rem;
      padding: 1rem;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1); 
      color: rgba(0, 0, 0, 0.8);
    
    svg {
      position: relative;
      top: 0.5rem;
      width: 12px !important;
      height: 12px !important;
      fill: transparent !important;
    }
  }
`;

const MenuSidebar = ({data, onClick}) => {

  const {login, category, userLogout} = React.useContext(UserContext);
  const [height, setHeight] = React.useState('847px');

  console.log(height);

  const handleLoad = (target) => {
    let height = window.innerHeight;
    var lastScrollTop = 0;

    window.addEventListener('scroll', function (e) {
      console.log(window.innerHeight);
    });
  };

  return (
    <Container>
      <Menu>
        <Header>
          {login ?
            <>
              <ProfileImg>
                <img src={data?.userClient.avatar.url} alt="foto do usuario" />
              </ProfileImg>

              <div>
                <p> Olá, {data?.userClient.nameCli} </p> 
                <span> 
                  <button onClick={userLogout}> Sair </button> 
                </span>
              </div>
            </>
            :
            <>
              <div>
                <UserLogout viewBox="0 0 120 120" />
              </div>
              <div>
                <Link to="/login" onClick={()=>{onClick(false)}}> Entre ou cadastre-se </Link>
                <p> pedidos, faturas, favoritos...</p>
              </div>
            </>
        }
          <ButtonLogout onClick={() => {onClick(false)}}> X </ButtonLogout>
        </Header>
        <ListCategory>
          {/* principais  */}
          {login &&
          <ul>
          <p> Principais </p>
            <Link to="#" onClick={() => {onClick(false)}}>
              <li> Dados pessoais </li>
            </Link>
            <Link to="#" onClick={() => {onClick(false)}}>
              <li> Meus pedidos </li>
            </Link>
            <Link to="/lista-de-favoritos" onClick={() => {onClick(false)}}>
              <li> Favoritos </li>
            </Link>
            <Link to="#" onClick={() => {onClick(false)}}>
              <li> Faturas </li>
            </Link>
          </ul>}
          {/* categorias  */}
          <ul>
            <p> Categorias </p>
            {category?.map((category, index) => (
              <Link
                key={index}
                to={"categoria/" + category.slug}
                onClick={() => {
                  onClick(false);
                }}
              >
                <li>
                  {category.titleCategory}
                  <Arow />
                </li>
              </Link>
            ))}
          </ul>
        </ListCategory>
      </Menu>
      <Background onClick={()=>{onClick(false)}}/>
    </Container>
  );
}

export default MenuSidebar;