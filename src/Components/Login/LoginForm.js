import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Input } from './../Useful/Input';
import Button from './../Useful/Button';


const DivPassword = styled.div`
  position: relative;

  a {
    position: absolute;
    top: 2.5rem;
    right: 0;
    font-size: 0.8rem;
    padding: 0.5rem;
  }
`;

const GoRegister = styled.div`
  color: ${(props) => props.theme.colors.text};
  margin-top: 1rem;
`;



const LoginForm = () => {
  return (
    <div className="animeFade">
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
    </div>
  )
}

export default LoginForm;