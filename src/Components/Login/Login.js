import React from "react";
import styled from "styled-components";
import { Input } from "./../Useful/Input";
import backgroundLogin from "../../Assets/backgroundLogin.png";
import Button from "./../Useful/Button";
import { Link, Routes, Route} from "react-router-dom";
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import ForgotForm from './ForgotForm';

const LoginContainer = styled.div`
  background: white;
  display: flex;
  justify-content: space-between;
  width: 63.125rem;
  margin: 5rem auto;

  border-radius: 10px;

  @media (max-width: 30rem) {
    margin: 2rem auto;
    max-width: 100%;
  }
`;

const InfoLogin = styled.div`
  position: relative;
  flex: 1;
  padding: 2rem;
  text-align: center;
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


const BackgroundLogin = styled.div`
  /* border: 1px solid red; */
  padding: 0;
  
  img  {
    max-width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 30rem) {
    display: none;
  }
`;

const Login = () => {

  return (
    <LoginContainer>
      <InfoLogin>
        <Routes>
          <Route path="/" element={<LoginForm />}></Route>
          <Route path="register" element={<RegisterForm />}></Route>
          <Route path="forgot" element={<ForgotForm />}></Route>
        </Routes>

      </InfoLogin>

      <BackgroundLogin>
        <img src={backgroundLogin} alt="Background Login" />
      </BackgroundLogin>
    </LoginContainer>
  );
};

export default Login;
