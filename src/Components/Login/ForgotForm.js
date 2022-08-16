import React from 'react'
import { Input } from './../Useful/Input';
import Button from './../Useful/Button';

const ForgotForm = () => {
  return (
    <div className="animeFade">
      <h2> Vamos recuperar sua senha!</h2>
      <Input type="email" placeholder="Informe seu email" />
      <Button> Recuperar senha</Button>
    </div>
  )
}

export default ForgotForm;