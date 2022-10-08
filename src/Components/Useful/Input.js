import React from 'react';
import styled from 'styled-components';

import {ReactComponent as Search} from "../../Assets/search.svg";

import {ReactComponent as ShowPassword} from "../../Assets/eye.svg";

const InputField = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-bottom: 1.25rem;

  label {
    font-size: 14px;
    margin-bottom: 0.5rem;
  }

  input {
    width: 100%;
    height: 40px;

    padding: 0 1rem;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    background: ${(props) => props.theme.colors.grayBackground} !important;
    transition: 0.1s;
    margin: auto !important;

    :focus {
      outline: 1px solid transparent;
    }

    :hover,
    :focus {
      background: white !important;
      box-shadow: 0 0 2px 1px ${(props) => props.theme.colors.blueBackground};
    }
  }

  button {
    z-index: 99;
    position: relative;
    width: 24px;
    bottom: 1.8rem;
    left: 92.5%;

    top: 55%;

    border: transparent;
    background: transparent;
    text-decoration: none;
    display: block;
    cursor: pointer;

    svg {
      padding: 0.3rem;
      max-width: 100%;

      path {
        fill: ${(props) => props.theme.colors.darkGray};
      }
    }
  }
`;

const Error = styled.p`
    color: red;
    font-size: 12px;
    margin-top: .5rem;
`;


export const Input = ({type, name, label, placeholder, value, onChange, onBlur, error, icon}) => {

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
  
  return (
    <InputField>
      <label> {label} </label>
      <input name={name} 
      type={type} 
      placeholder={placeholder} 
      value={value} 
      onChange={onChange}
      onBlur={onBlur}>
      </input>

      {iconSvg && 
      <button> {iconSvg} </button>}
      { error && <Error> {error} </Error> }
    </InputField>
  )
}