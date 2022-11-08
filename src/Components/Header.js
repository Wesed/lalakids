import React from 'react';
import styled from 'styled-components';
import logo from '../Assets/logo.png';

import {ReactComponent as BagIcon} from "../Assets/bagIcon.svg";
import {ReactComponent as Hamburguer} from "../Assets/hamburguer.svg";
import { ReactComponent as Like } from "../Assets/heart.svg";
import { ReactComponent as Liked } from "../Assets/heartLiked.svg";

import UseMedia from './Useful/UseMedia';

import { Link } from 'react-router-dom';
import SearchBar from './SearchBar/SearchBar';

import { UserContext } from './UserContext';
import { gql, useQuery } from '@apollo/client';
import MenuSidebar from './Sidebar/MenuSidebar';


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
  flex-wrap: wrap;
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
    flex: 2;

    @media (max-width: 30rem) {
      flex-basis: 100%;
    }
  }

  @media (max-width: 30rem) {
    width: 100%;
    gap: .5rem;

    div:nth-child(2) {
      order: 4;
    }
  }

  /* menu hamburguer*/
    button {
    color: ${(props) => props.theme.colors.text};
    border: 1px solid transparent;
    background: transparent;
    transition: ease 0.3s;

    :hover {
      color: black;
    }

    svg {
      position: relative;
      top: .8rem;
      width: 24px;
      height: 24px;
      fill: ${(props) => props.theme.colors.darkGray};
    }

    @media (max-width: 30rem) {
      order: -1;
    }
  }
`;

const DivIcons = styled.div`
  svg {
    position: relative;
    top: .8rem;
    width: 24px;
    height: 24px;
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
  padding: .5rem 0;
  /* border: 1px solid red; */

  p {
    width: 10rem;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  
  :hover {
    cursor: pointer;

    ul {
      opacity: 1;
      pointer-events: auto;
    }
  }

  ul {
    border: 1px solid blue;
    position: absolute;
    z-index: 998;
    top: 3rem;
    right: 18.5rem;
    background: ${(props) => props.theme.colors.grayBackground};
    border: 1px solid green;
    padding: .5rem 1rem;
    text-align: left;
    border: 1px solid transparent;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    opacity: 0;
    pointer-events: none;
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
  const [mobileActive, setActive] = React.useState(false);
  const {login, dataContext, userLogout, category, setCategory} = React.useContext(UserContext);

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

  React.useEffect(()=>{
    data && setCategory(data.allCategories);
  }, [category, setCategory, data]);

  return (
    <HeaderContainer>
      <HeaderContent>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>

        <SearchBar />

        {media ? (
          <>
            <button onClick={()=>{setActive(!mobileActive)}}>
              <Hamburguer />
            </button>
            {mobileActive && <MenuSidebar login={login} data={dataContext} setActive={setActive}/>}
          </>
        ) : (
          <div>
            {login ? (
              <UserDiv>
                <p> {dataContext.userClient.nameCli} </p>

                <ul>
                  <li> Minha conta </li>
                  <li onClick={userLogout}> Sair </li>
                </ul>
              </UserDiv>
            ) : (
              <Link to="/login">Entre ou cadastre-se</Link>
            )}
          </div>
        )}

        {/* favoritos */}
        <DivIcons>
          <Link to="/lista-de-favoritos"> {login ? <Liked /> : <Like />} </Link>
        </DivIcons>

        {/* carrinho */}
        <DivIcons>
          <Link to="/carrinho"> <BagIcon /> </Link>
        </DivIcons>
      </HeaderContent>

      <Navbar>
        {category?.map((menu, index) => (
          <Link key={index} to={`/categoria/${menu.slug}`}>
            {menu.titleCategory}
          </Link>
        ))}
      </Navbar>
    </HeaderContainer>
  );
}