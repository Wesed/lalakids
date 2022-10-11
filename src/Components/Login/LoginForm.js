import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Input } from './../Useful/Input';
import Button from './../Useful/Button';
import { useQuery } from 'graphql-hooks';
import { Crypto } from './../Useful/Crypto';

import useLogin from './../Hooks/useLogin';



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

  const {dataContext, errorState, loading, verify} = useLogin();

  /* 
    colocar o validate nos campos pra ver se nao estao vazios antes de fazer a requisiçao
    assim que clicar, criar um estado de loading
    ao retornar, verificar se esta null (erro) ou se tem conteudo (logou)
  */

  const handleClick = () => {
    const username = document.querySelector('[name="username"]').value;
    const password = Crypto(document.querySelector('[name="password"]').value, 'lalakids');
    verify(username, password);
    // nao tem nenhum retorno do hook, logo os campos estao vazios
    if (dataContext === 'undefined') {
      console.log(dataContext);
      if (dataContext && dataContext.userClient == null) {
        // nao encontrou nenhum registro, info erradas
      }
    }
  };

return (
  <Container className="animeFade">
        <h2>Faça login ou <Link to="register">crie uma nova conta!</Link></h2>
        <Input type="text" name="username" placeholder="Informe o email cadastrado" />
        <DivPassword>
          <Input type="password" name="password" placeholder="Informe a senha" icon="ShowPassword"/>
          <Link to="/login/forgot"> Esqueci minha senha </Link>
        </DivPassword>

        <Button handleClick={handleClick}> Entrar</Button>

        <GoRegister>
          Não tem uma conta?
          <Link to="/login/register"> Crie agora!</Link>
        </GoRegister>
  </Container>
)
}

export default LoginForm;