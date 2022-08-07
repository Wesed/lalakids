import React from 'react'
import Item from './Item';

import styled from 'styled-components';

import prod1 from '../../Assets/prod1.webp';
import prod2 from '../../Assets/prod2.webp';
import prod3 from '../../Assets/prod3.webp';
import prod4 from '../../Assets/prod4.webp';
import prod5 from '../../Assets/prod5.webp';
import prod6 from '../../Assets/prod6.webp';
import prod7 from '../../Assets/prod7.webp';
import prod8 from '../../Assets/prod8.webp';
import prod9 from '../../Assets/prod9.webp';
import prod10 from '../../Assets/prod10.webp';
import prod11 from '../../Assets/prod11.png';


// responsavel por exibir todos os produtos principais 

const Container = styled.main`
  background: white;
  max-width: 80%;
  margin: 2.5rem auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, auto));
  gap: 4rem 5rem;
  padding: 1rem;
  border-radius: 10px;

  @media (max-width: 30rem) {
    max-width: 100%;
    gap: 2rem 1rem;
  }

`;

const Main = () => {

  const prods = [prod1, prod2, prod3, prod4, prod5, prod6, prod7, prod8, prod9, prod10, prod11];


  return (
      <Container>
        {prods.map((prod, index) => <Item key={index} prod={prod} />)}; 
      </Container>
  )
}

export default Main;