import React from 'react'
import { Input } from './../Useful/Input';
import Button from './../Useful/Button';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const DivPassword = styled.div`
  position: relative;

  a {
    position: absolute;
    top: 2.5rem;
    right: 0;
    font-size: 0.8rem;
    text-decoration: none;
    color: ${(props) => props.theme.colors.text};
    padding: 0.5rem;

    :hover {
      font-weight: 700;
    }
  }
`;

const GoLogin = styled.div`
  color: ${(props) => props.theme.colors.text};
  margin-top: 1rem;

  a {
    text-decoration: none;
    font-weight: bold;
    color: ${(props) => props.theme.colors.text};

    :hover {
      cursor: pointer;
      color: black;
    }
  }
`;

const NameField = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Register = () => {
  return (
    <div className="animeFade">
      <h2>Preencha com seus dados ;)</h2>
          <Input type="email" placeholder="Seu e-mail" />

          <NameField>
            <Input type="text" placeholder="Nome" />
            <Input type="text" placeholder="Sobrenome" />
          </NameField>

          <DivPassword>
            <Input type="password" placeholder="Crie uma senha" icon="ShowPassword"/>
          </DivPassword>

          <Button>Entrar</Button>

          <GoLogin>
            Já tem uma conta?
            <Link to="/login"> Entre agora!</Link>
          </GoLogin>
    </div>
  )
}

export default Register;