import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border: 1px solid black;
  margin: 6.25rem auto;
  width: 80%;
  display: grid;
  grid-template-columns: 60% 40%;
`;

const ProdContainer = styled.div`
  border: 1px solid blue;
`;

const InfoProd = styled.div`
  border: 1px solid green;
`;

const Cart = () => {
  return (
    <Container>
      <ProdContainer>
        bla bla bla
      </ProdContainer>
      <InfoProd>
        ble ble ble
      </InfoProd>
    </Container>
  )
}

export default Cart;