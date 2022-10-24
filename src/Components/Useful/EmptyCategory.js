import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 50vh;
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