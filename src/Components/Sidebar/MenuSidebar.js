import React from 'react';
import styled from 'styled-components';
import {ReactComponent as UserLogout} from "../../Assets/userLogout.svg";
import {ReactComponent as Arow} from "../../Assets/arow.svg";
import { UserContext } from './../UserContext';
import { Link } from 'react-router-dom';

const Container = styled.div`
  z-index: 998;
  position: absolute;
  top: 0; left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
`;

const Menu = styled.div`
  z-index: 999;
  background: white;
  width: 80%;
  height: 100vh;
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

  /* posicionamento muda qd ta logado, desce pq tem um P a menos*/
button {
  position: absolute;
  right: 1rem;
  color: ${props => props.theme.colors.text};
  padding: .3rem .7rem;
  font-size: 1.5rem;
  width: min-content;
  border: 1px solid transparent;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 1) !important;
  box-shadow: 1px 3px 10px 1px rgba(0, 0, 0, 0.3);  
}
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


  const {login, category} = React.useContext(UserContext);

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
              </div>
            </>
            :
            <>
              <div>
                <UserLogout viewBox="0 0 120 120" />
              </div>
              <div>
                <p> Entre ou cadastre-se</p>
                <p> pedidos, faturas, favoritos...</p>
              </div>
            </>
        }
          <button onClick={() => {onClick(false)}}> X </button>
        </Header>
        <ListCategory>
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
    </Container>
  );
}

export default MenuSidebar;