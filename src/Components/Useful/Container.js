import React from 'react';
import styled from 'styled-components';

const ContainerSection = styled.section`
  background: white;
  max-width: 80%;
  margin: 2.5rem auto;
  display: grid;
  grid-template-columns: repeat(4, minmax(150px, auto));
  justify-content: space-around;
  gap: 4rem 5rem;

  @media (max-width: 30rem) {
    max-width: 100%;
    display: flex;
    justify-content: space-around;
    gap: 0;
    flex-wrap: wrap;
  }
`;



const Container = ({children}) => {
  return (
    <ContainerSection>{children}</ContainerSection>
  )
}

export default Container;