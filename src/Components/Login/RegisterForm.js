import React from 'react'
import { Input } from './../Useful/Input';
import Button from './../Useful/Button';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { buildClient } from '@datocms/cma-client-browser';


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
  gap: 0 1rem;
`;

const Register = () => {


  const run = async () => { 

    const name = document.querySelector('[name="input_name"]');
    const lastName = document.querySelector('[name="input_lastName"]');
    const email = document.querySelector('[name="input_email"]');
    const password = document.querySelector('[name="input_password"]');

    const client = buildClient({ apiToken: '126a9840ad52f13ded80e6ac84b657' });

    console.log(typeof lastName.value);

    const record = await client.items.create({
      item_type: { type: 'item_type', id: '18618' },
      name_cli: name.value + " " + lastName.value,
      password: password.value,
      email_cli: email.value,
      phone_cli: '',
      debit_cli: 0,
      credit_cli: 0,
      address_cli: '',
      comments_cli: ''
    });
  
    console.log(record);
  };
  
  return (
    <div className="animeFade">
      <h2>Preencha com seus dados ;)</h2>
          <NameField>
            <Input type="text" name="input_name" placeholder="Nome" />
            <Input type="text" name="input_lastName" placeholder="Sobrenome" />
          </NameField>

          <Input type="email" name="input_email" placeholder="Seu e-mail" />

          <DivPassword>
            <Input type="password" name="input_password" placeholder="Crie uma senha" icon="ShowPassword"/>
          </DivPassword>

          <Button handleClick={run}> CRIAR CONTA  </Button>

          <GoLogin>
            Já tem uma conta?
            <Link to="/login"> Entre agora!</Link>
          </GoLogin>
    </div>
  )
}

export default Register;