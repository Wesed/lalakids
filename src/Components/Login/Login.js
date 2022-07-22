import React from 'react';
import styled from 'styled-components';
import { Input } from './../Useful/Input';
import backgroundLogin from '../../Assets/backgroundLogin.png';
import Button from './../Useful/Button';
import { Link } from 'react-router-dom';

const LoginContainer = styled.div`
  background: white;
  display: flex;
  justify-content: space-between;
  width: 63.125rem;
  margin: 5rem auto;
  border: 1px solid red;

  border-radius: 10px;

`;

const InfoLogin = styled.div`
  position: relative;
  flex: 1;
  padding: 2rem;
  text-align: center;
  border: 1px solid blue;
  column-gap: 1rem;

  h2 {
    margin-bottom: 2.5rem;
    font-size: 1.125rem;
    color: ${props => props.theme.colors.text};
  }

  input {
    margin-bottom: 2.5rem;
    background: transparent;
  }

  svg {
      width: 36px;
      right: 0.2rem;
      top: 15%;
      transform: translateY(-15%);
  }

  a {
    border: 1px solid red;
    position: absolute;
    top: 1rem;
  }
`;

const BackgroundLogin = styled.div`

`;

const Login = () => {
  return (
    <LoginContainer>
      
      <InfoLogin>
        <h2>Faça login ou crie uma nova conta!</h2>
        <Input type="text" placeholder="Informe o usuário" />
          <Input type="text" placeholder="Informe a senha" icon="ShowPassword"/>
          <Link to="#"> Esqueci minha senha </Link>
        <Button>Entrar</Button>
      </InfoLogin>

      <BackgroundLogin>
        <img src={backgroundLogin} alt="Background Login" />
      </BackgroundLogin>

    </LoginContainer>
  )
}

export default Login;