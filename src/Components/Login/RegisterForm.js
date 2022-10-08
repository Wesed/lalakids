import React from 'react'
import { Input } from './../Useful/Input';
import Button from './../Useful/Button';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { buildClient } from '@datocms/cma-client-browser';
import useForm from './../Useful/UseForm';
import { Crypto } from './../Useful/Crypto';

const DivPassword = styled.div`
  position: relative;
  margin-bottom: 2.5rem;

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
  align-items: start;
  gap: 0 1rem;
`;

const SucessDiv = styled.div`
  margin-top: 2.5rem;
  color: green;

  span {
    display: block;
    color: black;
    margin-top: .5rem;
  }
`;

const ErrorDiv = styled.div`
  margin-top: 2.5rem;
  color: red;

  span {
    display: block;
    color: black;
    margin-top: .5rem;
  }
`;

const Register = () => {

  const [register, setRegister] = React.useState(false);
  const [getError, setError] = React.useState(false);

  const name = useForm(true);
  const lastName = useForm(true);
  const email = useForm('email');
  const password = useForm('password');

  /* 
    if (password.validate() so vai retornar true se tiver sido validado,
    usar esse if antes de cadastrar o usuario
  */
 
  const run = async () => {
    if ( name.validate() && lastName.validate() && email.validate() && password.validate() ) {

      const name = document.querySelector('[name="input_name"]');
      const lastName = document.querySelector('[name="input_lastName"]');
      const email = document.querySelector('[name="input_email"]');
      const password = document.querySelector('[name="input_password"]');

      const crypto = Crypto(password, 'lalakids');


      const client = buildClient({
        apiToken: "126a9840ad52f13ded80e6ac84b657",
      });

      console.log(typeof lastName.value);

      // testa

      try {
        const record = await client.items.create({
          item_type: { type: "item_type", id: "18618" },
          name_cli: name.value + " " + lastName.value,
          password: crypto,
          email_cli: email.value,
          phone_cli: "",
          debit_cli: 0,
          credit_cli: 0,
          address_cli: "",
          comments_cli: "",
        });
        setRegister(true);
        setError(false);
      } catch (e) {
        setError(true);
        setRegister(false);
      }
    }
  };
  
  return (
    <div className="animeFade">
      <h2>Preencha com seus dados ;)</h2>
          <NameField>
            <Input type="text" name="input_name" 
            label="Nome" {...name} />

            <Input type="text" 
            name="input_lastName" 
            label="Sobrenome" {...lastName} />
          </NameField>

          <Input type="email" 
          name="input_email" 
          label="Email"
          placeholder="exemplo@.com" {...email} />

          <DivPassword>
            <Input type="password" 
            name="input_password" 
            label="Senha"
            placeholder="Crie uma senha" 
            icon="ShowPassword" {...password}/>
          </DivPassword>

          <Button handleClick={run}> CRIAR CONTA  </Button>

          <GoLogin>
            Já tem uma conta?
            <Link to="/login"> Entre agora!</Link>
          </GoLogin>

          {
            getError &&
            <ErrorDiv>
              <p> Ops, algo deu errado! 🙁</p>
              <span> PS: o email não pode ter sido usado por outra pessoa, ok?</span>
            </ErrorDiv>
          }

          {register && 
          <SucessDiv> 
            <p> Oba! Seu cadastro foi um sucesso! </p>
            <span> <Link to="/login"> Clique aqui </Link> e faça login 😃 </span>
            
          </SucessDiv>}
    </div>
  )
}

export default Register;