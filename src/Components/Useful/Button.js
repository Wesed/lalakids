import React from 'react';
import styled from 'styled-components';

const Btn = styled.button`
  background: red;
  width: 100%;
  padding: 1rem;
  color: white;
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;

  border: none;
  background-image: ${props => props.theme.colors.degrade};
  opacity: .7;
  transition: ease-in .1s;
  border-radius: 4px;

  :hover {
    opacity: 1;
  }
`;

const Button = ({children}) => {
  return (
    <Btn>
      {children}
      </Btn>
  )
}

export default Button;