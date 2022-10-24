import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  z-index: 9999;
  width: 1920px;
  height: 100vh;
  right: 0;
  border: 5px solid red;
  background: blue;
`;
const LoginModal = () => {

  console.log('oi');

  return (
    <Container>LoginModal</Container>
  )
}

export default LoginModal;