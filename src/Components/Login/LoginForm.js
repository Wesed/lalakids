import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Input } from './../Useful/Input';
import Button from './../Useful/Button';
import { useQuery } from 'graphql-hooks';
import { Crypto } from './../Useful/Crypto';

import useLogin from './../Hooks/useLogin';
import useForm from './../Useful/UseForm';

import { UserContext } from './../UserContext';
import Error from './../Useful/Error';


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
  const username = useForm('email');
  const password = useForm(true);
  // indica qd o button foi clicado
  const [verificador, setVerificador] = React.useState(false);
  const {errrorContext, login, loadingContext, verifyLogin} = React.useContext(UserContext);
  // quando login for true, ja vai direto pra pagina inicial 
  // isso deveria estar no context, nao ?

  const handleClick = () => {
    if (username.validate() && password.validate()) {
      const passwordCrypto = Crypto(password.value, "lalakids");
      verifyLogin(username.value, passwordCrypto);

      setTimeout(()=> {
        setVerificador(true);
      }, 1000)
    }
  };

return (
  <Container className="animeFade">
        <h2>Faça login ou <Link to="register">crie uma nova conta!</Link></h2>
        <Input type="text" name="username" placeholder="Informe o email cadastrado" {...username}/>
        <DivPassword>
          <Input type="password" name="password" placeholder="Informe a senha" icon="ShowPassword" {...password}/>
          <Link to="/login/forgot"> Esqueci minha senha </Link>
        </DivPassword>

        {
          loadingContext ? 
          <Button disabled> Carregando... </Button>
          :
          <Button handleClick={handleClick}> Entrar</Button>
        }

        <GoRegister>
          Não tem uma conta?
          <Link to="/login/register"> Crie agora!</Link>
        </GoRegister>

        { verificador && !login && <Error> Ops, as informações estão erradas 🙁  Tente novamente </Error> }

  </Container>
)
}

export default LoginForm;