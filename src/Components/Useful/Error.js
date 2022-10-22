import React from 'react';
import styled from 'styled-components';

const ErrorMessage = styled.p`
  margin-top: 2rem;
  font-weight: bold;
  color: red;

  span {
    font-weight: normal;
    color: black;
    display: block;
    margin-top: 1rem;
  }
`;

const Error = ({tip, children}) => {
  return (
    <ErrorMessage>
      {children}
      <span> 
        {tip}
      </span>
    </ErrorMessage>
  )
}

export default Error;