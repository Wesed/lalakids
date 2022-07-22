import React from 'react';
import styled from 'styled-components';

import {ReactComponent as Search} from "../../Assets/search.svg";

import {ReactComponent as ShowPassword} from "../../Assets/eye.svg";

const InputField = styled.div`
  position: relative;
  display: flex;

  input {
    width: 100%;
    height: 40px;

    padding: 0 1rem;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    background: ${props => props.theme.colors.grayBackground}; 

    :focus {
      outline: 1px solid transparent;
    }

    :hover, :focus { 
      border-image: ${props => props.theme.colors.degrade} 1;
      border-bottom-width: 2px;
      border-top-width: 0;
      border-right-width: 0;
      border-left-width: 0;
    }

  }


  svg {
    position: absolute;
    /* background: ${props => props.theme.colors.grayBackground}; */
    width: 24px;
    padding: .3rem;
    right: .8rem;
    top: 50%;
    transform: translateY(-50%);


    path {
      fill: ${props => props.theme.colors.darkGray};
    }

  }

  button {
    border: transparent;
    text-decoration: none;
    display: block;
    cursor: pointer;
  }
`;


export const Input = ({type, placeholder, icon}) => {

  let iconSvg = null;

  switch (icon) {
    case 'Search': 
      iconSvg =  <Search />
      break;

      case 'ShowPassword': 
      iconSvg =  <ShowPassword />
      break;
  
    default: 
      iconSvg = ''
  }

  console.log(iconSvg);
  
  return (
    <InputField>
      <input type={type} placeholder={placeholder}></input>
      {iconSvg && 
      <button> {iconSvg} </button>}
    </InputField>
  )
}