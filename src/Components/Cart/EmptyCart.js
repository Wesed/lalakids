import React from 'react';
import styled  from 'styled-components';
import { ReactComponent as Bag } from '../../Assets/bag-empty-cart.svg';
import Button from './../Useful/Button';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    
    h3 {
      font-size: 1rem;
      font-weight: 500;
      /* padding: 1rem; */
    }

    button {
      /* width: 22rem; */
    }
    
  }
`;

const EmptyCart = () => {
  const navigate = useNavigate(); 
  return (
    <Container>
      <div>
        <Bag />
        <h3> A sua sacola de compras está vazia! </h3>
        <Button onClick={()=>{navigate('/');}}> Comprar agora </Button>
      </div>
    </Container>

  );
}

export default EmptyCart;