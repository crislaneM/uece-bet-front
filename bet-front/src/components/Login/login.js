import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import StdInput from '../Util/StdInput';
import StdBtn from '../Util/StdBtn';
import StdTitle from '../Util/Title';
import styled from 'styled-components';


const LinksRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: medium;
`;

const Login = () => {
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setemailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleLogin = (event) => {
    // Simple validation example
    event.preventDefault();
    if (!email) {
      setemailError('Campo de preenchimento obrigatório');
    }
    else if(!email.includes('@')){
      setemailError('Email Inválido: Necessário @');
    }
    else {
      setemailError('');
    }

    if (!password) {
      setPasswordError('Campo de preenchimento obrigatório');
    } else {
      setPasswordError('');
    }

    // If there are errors, don't proceed with login
    if (emailError || passwordError) {
      return;
    }

    // Authentication logic here
    const formData = {
      email: email,
      password: password,
    };
    console.log(formData);
  };

  return (
    <>
    <div>
      <StdTitle />
      <form>
        <StdInput
          label="Email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
        {emailError && <p className='error'>{emailError}</p>}
        <StdInput
          label="Senha"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {passwordError && <p className='error'>{passwordError}</p>}
        <StdBtn label="Entrar" onClick={handleLogin} mgBotton={'20px'} />
      </form>
      <LinksRow>
        <Link to="/cadastro" style={{ color: 'white' }}>
          Cadastre-se
        </Link>
        <Link to="/recuperarSenha" style={{ color: 'white' }}>
          Esqueci a senha
        </Link>
      </LinksRow>
    </div>
    <style type="text/css">
            {`

                .error{
                  font-size: 15px;
                  color: red;
                }

                `}
        </style>
    </>
    
    
    
  );
};

export default Login;