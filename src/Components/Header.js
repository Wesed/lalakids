import React from 'react';
import styled from 'styled-components';
import logo from '../Assets/logo.png';

import {ReactComponent as BagIcon} from "../Assets/bagIcon.svg";
import {ReactComponent as Hamburguer} from "../Assets/hamburguer.svg";
import UseMedia from './Useful/UseMedia';

import { Link } from 'react-router-dom';
import SearchBar from './SearchBar/SearchBar';

import { UserContext } from './UserContext';
import { gql, useQuery } from '@apollo/client';


const HeaderContainer = styled.header`
  background: white;
  width: 100%;

  a {
    :link,
    :visited,
    :active {
      text-decoration: none;
    }
  }

  @media (max-width:30rem) {
    padding: 0 1rem;
  }
`;

const HeaderContent = styled.div`
  padding: 0.5rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 75%;
  margin: 0 auto;
  gap: 2rem;

  img {
    width: 60px;
    height: 50px;
  }

  div:nth-child(3) { 
    text-align: center;

    a {
      color: black;
    }
  }

  svg {
    top: 50%;
    transform: translateY(-50%);
  }

  /* referente ao input search */
  div:nth-child(2) {
      /* evitar margens desnecessarias*/
      display: inline-block;
      margin-bottom: 0;
      flex: 2;

      button {
        position: absolute;
        top: 50%;
        left: 93.5%;
        transform: translatey(-50%);
      }
  }

  @media (max-width:30rem) {
    width: 100%;
  }

  a:nth-child(3) {
    color: ${props => props.theme.colors.text};
    transition: ease .3s;

    :hover {
      color: black;
    }

  svg {
    width: 24px;
    height: 24px;
    fill: ${props => props.theme.colors.darkGray};
  }

  @media (max-width: 30rem) {
    order: -1;
  }
  }

  
`;

const BagLink = styled.a`
  svg {
    top: auto;
    transform: translateY(0);
  }
`;

const Navbar = styled.nav`
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  border-top: 1px solid ${props => props.theme.colors.border};
  border-bottom: 1px solid ${props => props.theme.colors.border};

  a {
    margin: 0 35px 0 0;
    font-size: .875rem;
    font-weight: 500;
    color: rgba(0, 0, 0, .8);

    :last-child {
      margin: 0;
    }

    :hover {
      color: rgba(0, 0, 0, 1);
    }
  }
  
  @media (max-width: 30rem) {
    justify-content: start;
    overflow-x: scroll;

    a {
      flex-shrink: 0;
      margin: 0;
      padding: 0 25px 0 0;
      font-size: .75rem;
      font-weight: 500;
    }
  }
`;

const UserDiv = styled.div`

  :hover {
    cursor: pointer;

    ul {
      opacity: 1;
    }
  }

  ul {
    position: absolute;
    top: 3rem;
    right: 10rem;
    background: ${(props) => props.theme.colors.grayBackground};
    border: 1px solid green;
    padding: .5rem 1rem;
    text-align: left;
    border: 1px solid transparent;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    opacity: 0;
    transition: .1s;

    li {
      list-style: none;
      padding: .3rem;
      color: rgba(0, 0, 0, 0.8);

      :hover {
        cursor: pointer;
        font-weight: 500;
      }
    }
  }
`;


export const Header = () => {

  const media = UseMedia('(max-width: 30rem)');
  const {login, dataContext, userLogout} = React.useContext(UserContext);

  const PROJECT_QUERY = gql`
  query MyQuery {
    allCategories(orderBy: titleCategory_ASC) {
      titleCategory
      slug
    }
  }
`;

  const {error, data } = useQuery(PROJECT_QUERY, {
    variables: {
      limit: 100,
    },
  });

  return (
    <HeaderContainer>
      <HeaderContent>
        <Link to="/"> <img src={logo} alt="logo" /> </Link>

        <SearchBar />

        {media ? 
        <Link to="#" > <Hamburguer/> </Link>

        /* criar um component e dentro do component verificar se ta logado */
        : 
        <div>
          {
            login ?
            <UserDiv> 
              <p> {dataContext.userClient.nameCli}  </p>

              <ul>
                <li> Minha conta </li>
                <li onClick={userLogout}> Sair </li>
              </ul>
            </UserDiv>
            :
            <Link to="/login">Entre ou cadastre-se</Link>
          }
        </div>
        }

        <BagLink href="/cart"><BagIcon/></BagLink>

      </HeaderContent>

      <Navbar>
        {data?.allCategories.map((menu, index) => <Link key={index} to={'categoria/' + menu.slug}> {menu.titleCategory} </Link>)}
      </Navbar>
    </HeaderContainer>
  )
}