import React from "react";
import styled from "styled-components";
import { Input } from "./../Useful/Input";
import backgroundLogin from "../../Assets/backgroundLogin.png";
import Button from "./../Useful/Button";
import { Link, Routes, Route} from "react-router-dom";
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

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
    color: ${(props) => props.theme.colors.text};
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
    text-decoration: none;
    font-weight: bold;
    color: ${(props) => props.theme.colors.text};

    :hover {
      cursor: pointer;
      color: black;
    }
  }
`;


const BackgroundLogin = styled.div``;

const Login = () => {

  return (
    <LoginContainer>
      <InfoLogin>
        <Routes>
          <Route path="/" element={<LoginForm />}></Route>
          <Route path="register" element={<RegisterForm />}></Route>
        </Routes>

      </InfoLogin>

      <BackgroundLogin>
        <img src={backgroundLogin} alt="Background Login" />
      </BackgroundLogin>
    </LoginContainer>
  );
};

export default Login;
