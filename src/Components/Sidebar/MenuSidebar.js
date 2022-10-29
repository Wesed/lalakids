import React from 'react';
import styled from 'styled-components';
import {ReactComponent as UserLogout} from "../../Assets/userLogout.svg";
import {ReactComponent as Arow} from "../../Assets/arow.svg";
import { UserContext } from './../UserContext';

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
`;

const ListCategory = styled.div`
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
      width: 12px;
      height: 12px;
      fill: transparent;
    }
    }
`;

const MenuSidebar = () => {
  const {login, category} = React.useContext(UserContext);
  return (
    <Container>
      <Menu>
        <Header> 
          <div> <UserLogout viewBox="0 0 120 120" /> </div>
          <div>
            <p> Entre ou cadastre-se</p>
            <p> pedidos, faturas, favoritos...</p>
          </div>
        </Header>
        <ListCategory>
          <ul>
            <p> Categorias </p>
            {category?.map((category, index) => (
              <li key={index}> 
              {category.titleCategory} 
              <Arow />
              </li>
            ))}
          </ul>
        </ListCategory>
      </Menu>
    </Container>
  )
}

export default MenuSidebar;