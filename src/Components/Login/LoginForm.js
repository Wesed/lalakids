import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Input } from './../Useful/Input';
import Button from './../Useful/Button';

const Container = styled.div`
`;


const DivPassword = styled.div`
  position: relative;
  text-align: right;
  margin-bottom: 2.5rem;

  a {
    display: block;
    font-size: 0.8rem;
    margin-top: -0.5rem;
  }

  button {
    top: 45%;
  }
`;

const GoRegister = styled.div`
  color: ${(props) => props.theme.colors.text};
  margin-top: 1rem;
`;



const LoginForm = () => {
  return (
    <Container className="animeFade">
      <h2>Faça login ou <Link to="register">crie uma nova conta!</Link></h2>
          <Input type="text" placeholder="Informe o usuário" />
          <DivPassword>
            <Input type="password" placeholder="Informe a senha" icon="ShowPassword"/>
            <Link to="/login/forgot"> Esqueci minha senha </Link>
          </DivPassword>

          <Button>Entrar</Button>

          <GoRegister>
            Não tem uma conta?
            <Link to="/login/register"> Crie agora!</Link>
          </GoRegister>
    </Container>
  )
}

export default LoginForm;