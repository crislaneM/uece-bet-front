// src/components/Login.js
import React, { useState } from 'react';
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
  const [uesername, setuesername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Lógica de autenticação aqui
    const formData  = {
        username: uesername,
        password:password,
    }
    console.log(formData);
  };

  return (
    <div>
      
      <StdTitle></StdTitle>
      <form>
        <StdInput
          label="Usuário"
          value={uesername}
          onChange={(e) => setuesername(e.target.value)}
        />
        <StdInput
          label="Senha"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <StdBtn label="Entrar" onClick={handleLogin} />
      </form>
      <LinksRow>
        <a href='./login.js' style={{color:"white"}} >Cadastre-se</a>
        <a href='./login.js' style={{color:"white"}} >Esqueci  a senha</a> 
      </LinksRow>
    </div>
  );
};

export default Login;