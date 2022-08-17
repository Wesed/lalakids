import React from 'react';
import styled from 'styled-components';
import logo from '../Assets/logo.png';
import { Input } from './Useful/Input';

import {ReactComponent as BagIcon} from "../Assets/bagIcon.svg";
import {ReactComponent as Hamburguer} from "../Assets/hamburguer.svg";
import UseMedia from './Useful/UseMedia';

import { Link } from 'react-router-dom';

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
  align-items: center;
  width: 75%;
  margin: 0 auto;
  gap: 2rem;

  img {
    width: 60px;
    height: 50px;
  }

  div { 
    flex: 1;
  }

  svg {
    top: 50%;
    transform: translateY(-50%);
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
    font-weight: bold;
    color: rgba(0, 0, 0, 1);

    :last-child {
      margin: 0;
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
      font-weight: 700;
    }
  }
`;


export const Header = () => {

  const media = UseMedia('(max-width: 30rem)');

  const menuSuperior = [
    {
      description: 'Meninas', 
      href: "meninas"
    }, 

    {
      description: 'Meninos', 
      href: "meninos"
    }, 

    {
      description: 'Unissex', 
      href: "unissex"
    }, 

    {
      description: 'Plus Size', 
      href: "plus-size"
    }, 

    {
      description: 'Mona íntima', 
      href: "moda-intima"
    }, 

    {
      description: 'Calçados', 
      href: "calcados"
    }, 

    {
      description: 'Promoções', 
      href: "promocoes"
    }, 

    {
      description: 'Conjuntos', 
      href: "conjuntos"
    }, 

    {
      description: 'Acessórios', 
      href: "acessorios"
    }, 

    {
      description: 'Me surpreenda!', 
      href: "surpreenda"
    }, 
  ];

  return (
    <HeaderContainer>
      <HeaderContent>
        <Link to="/"> <img src={logo} alt="logo" /> </Link>

        <Input type="type" placeholder="O que você procura?" icon="Search"/>

        {media ? <Link to="#" > <Hamburguer/> </Link>
        : 
        <Link to="/login" >Entre ou cadastre-se</Link>}

        <BagLink href="#"><BagIcon/></BagLink>

      </HeaderContent>

      <Navbar>
        
        {menuSuperior.map((menu, index) => <Link key={index} to={'categoria/' + menu.href}> {menu.description} </Link>)}

      </Navbar>
    </HeaderContainer>
  )
}