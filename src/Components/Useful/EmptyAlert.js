import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 60vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    color: ${props => props.theme.colors.textDark};
    font-size: 1.25rem;
  }

  span {
    margin-top: .5rem;
  }

  button {
    margin-top: 2rem;
    padding: .5rem 1rem;
    font-size: 1rem;
    border-radius: 4px;
    border: 2px solid transparent;
    cursor: pointer;
    transition: ease-out .1s;
    background: transparent;

    :hover {
      border: 2px solid ${props => props.theme.colors.blueBackground};
    }
  }

  @media (max-width: 30rem) {
    display: flex;
    text-align: center;
    height: 50vh;

    button {
      margin-top: 1rem;
    }
  }
  
`;

const EmptyAlert = ({tip, children}) => {

  /* 
    por algum motivo, o children nao funciona no subcategoria, necessitando desse ajuste
  */
  
  return (
    <Container>
        <h1> {children} </h1>
        { tip && <span> {tip} </span>}
      <button onClick={()=>{window.history.back()}}> Voltar </button>
    </Container>
  )
}

export default EmptyAlert;