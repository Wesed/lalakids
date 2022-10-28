import React from 'react';
import styled from 'styled-components';


import {ReactComponent as ShowPassword} from "../../Assets/eye.svg";

const InputField = styled.div`
  /* border: 1px solid blue; */
  position: relative;
  display: flex !important;
  flex-direction: column;
  text-align: left;
  /* flex-direction: row-reverse; */

  label {
    font-size: 14px;
    margin-bottom: 0.5rem;
  }

  input {
    width: 100%;
    height: 40px;

    padding: 0 1rem;
    border-radius: 4px;
    transition: 0.1s;
    background: ${(props) => props.theme.colors.grayBackground} !important;
    border: 1px solid rgba(0, 0, 0, 0.2);

    :focus {
      outline: 1px solid transparent;
    }

    :hover,
    :focus {
      background: white !important;
      box-shadow: 0 0 2px 1px ${(props) => props.theme.colors.blueBackground};
    }
  }

  span {
    position: absolute;
    right: .5rem;
    width: 24px;

    svg {
      position: relative;
      width: 24px;
      padding: 0.3rem;
      top: 1.2rem;

      path {
        fill: ${(props) => props.theme.colors.darkGray};
      }
    }
  }

  @media (max-width: 30rem) {
      input {
        order: 1;
      }

      span {
        order: 2;
        left: .5rem;
        right: 0;
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
      <span> {iconSvg} </span> }

      { error && <Error> {error} </Error> }
    </InputField>
  )
}