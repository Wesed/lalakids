import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  width: 500px;
  top: 50%; 
  right: 45%;
  transform: translate(50%,-50%);
  justify-content: center;
  align-items: center;

  h1 {
    color: ${props => props.theme.colors.textDark};
    font-size: 1.25rem;
  }
  
`;

const EmptyCategory = () => {
  return (
    <Container>
      <h1>Não temos produtos nessa categoria 🙁</h1>
    </Container>
  )
}

export default EmptyCategory;