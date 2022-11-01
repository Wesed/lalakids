import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 30rem) {
    display: flex;
    height: 50vh;
  }

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