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

  @media (max-width:30rem) {
    width: 100%;
  }

  a:first-of-type {
    color: rgba(0, 0, 0, 1);

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


const BagLink = styled.a``;


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

  console.log();

  const menuSuperior = [
    {
      description: 'Meninas', 
      href: "#"
    }, 

    {
      description: 'Meninos', 
      href: "#"
    }, 

    {
      description: 'Unissex', 
      href: "#"
    }, 

    {
      description: 'Plus Size', 
      href: "#"
    }, 

    {
      description: 'Mona íntima', 
      href: "#"
    }, 

    {
      description: 'Calçados', 
      href: "#"
    }, 

    {
      description: 'Promoções', 
      href: "#"
    }, 

    {
      description: 'Conjuntos', 
      href: "#"
    }, 

    {
      description: 'Acessórios', 
      href: "#"
    }, 

    {
      description: 'Me surpreenda!', 
      href: "#"
    }, 
  ];

  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logo} alt="logo" />

        <Input type="type" placeholder="O que você procura?" icon="Search"/>

        {media ? <Link to="#" > <Hamburguer/> </Link>
        : 
        <Link to="/login" >Entre ou cadastre-se</Link>}

        <BagLink href="#"><BagIcon/></BagLink>

      </HeaderContent>

      <Navbar>
        
        {menuSuperior.map((menu, index) => <a key={index} href={menu.href}> {menu.description} </a>)}

      </Navbar>
    </HeaderContainer>
  )
}