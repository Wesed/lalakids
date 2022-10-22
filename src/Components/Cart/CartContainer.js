import React from 'react';
import EmptyCart from './EmptyCart';
import styled from 'styled-components';
import CategoriaAleatoria from '../Categoria/CategoriaAleatoria';
import Cart from './Cart';

/* 
  * Esse component e responsavel por verificar se esta vazio ou nao;

  1. primeiro fazer toda a parte de carrinho com dados ficticios, depois
  estudar sobre redux pra implementar de verdade

*/

const Container = styled.div`
  background: ${props => props.theme.colors.background};
  // sem essa borda, o topo fica branco ?????
  border: 1px solid transparent;
`;
const CartContainer = () => {
  /* se true = esta vazio */
  const [empty, setEmpty] = React.useState(false);

  return (
    <Container>
      {empty 
      ? 
      <EmptyCart /> 
      : 
      <Cart />}

      <CategoriaAleatoria />
    </Container>
  );

}

export default CartContainer;