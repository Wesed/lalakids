import React from 'react';
import styled from 'styled-components';

import {ReactComponent as Search} from "../../Assets/search.svg";

const InputField = styled.div`
  position: relative;
  display: flex;

  input {
    width: 100%;
    height: 40px;

    padding: 0 1rem;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    background: ${props => props.theme.colors.grayBackground}; // tornar isso global

    :focus {
      outline: 1px solid transparent;
    }

    :hover { 
      border: 1px solid rgba(0, 0, 0, .4);
    }

  }

  svg {
    position: absolute;
    background: ${props => props.theme.colors.grayBackground};
    width: 24px;
    padding: .3rem;
    fill: #0ED6E5;
    right: .8rem;
    top: 50%;
    transform: translateY(-50%);
  }
`;


export const Input = ({type, placeholder, icon}) => {

  let iconSvg = null;

  switch (icon) {
    case 'Search': 
      iconSvg =  <Search />
      break
  
    default: 
      return false
  }
  
  return (
    <InputField>
      <input type={type} placeholder={placeholder}></input>
      {iconSvg && 
      <span> {iconSvg} </span>}
    </InputField>
  )
}