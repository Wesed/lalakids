import React from 'react';
import styled from 'styled-components';


import {ReactComponent as ShowPassword} from "../../Assets/eye.svg";

const InputField = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: left;
  height: 100px;

  label {
    font-size: 14px;
    margin-bottom: 0.5rem;
  }

  input {
    width: 100%;
    height: 40px;
    align-self: center;

    padding: .8rem 1rem;
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
    display: block;
    top: 40% !important;
    transform: translateY(-40%) !important;
    right: .5rem;
    width: 24px;
    cursor: pointer;

    svg {
      position: relative;
      width: 24px;
      padding: 0.3rem;
      top: .5rem;

      path {
        fill: ${(props) => props.theme.colors.darkGray};
      }
    }
  }

`;

const Error = styled.p`
    position: relative;
    top: -2rem;
    color: red;
    font-size: 12px;

    @media (max-width: 30rem) {
      position: absolute;
      top: 4.5rem;
    }
`;


export const Input = ({type, name, label, placeholder, value, onChange, onBlur, error, icon}) => {

  const handleClick = () => {
    const input = document.querySelector('input[name=' + name + ']');

    if (input.type === 'password') {
      input.type = 'text';
    } else {
      input.type = 'password';
    }
  };

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
      <span onClick={handleClick}> {iconSvg} </span> }


        { error && <Error> {error} </Error> }

    </InputField>
  )
}