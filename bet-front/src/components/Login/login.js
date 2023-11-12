// Login.js
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
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Authentication logic here
    const formData = {
      username: username,
      password: password,
    };
    console.log(formData);
  };

  return (
    <div>
      <StdTitle />
      <form>
        <StdInput
          label="Usuário"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
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
        <Link to="/cadastro" style={{ color: "white" }}>Cadastre-se</Link>
        <Link to="/recuperarSenha" style={{ color: "white" }}>Esqueci a senha</Link>
      </LinksRow>
    </div>
  );
};

export default Login;