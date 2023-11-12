// src/components/Login.js
import React, { useState } from 'react';
import StdInput from '../Util/StdInput';
import StdBtn from '../Util/StdBtn';
import styled from 'styled-components';
import { ReactComponent as Logo } from '../../jogador-de-futebol 4.svg';

const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LinksRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: medium;
`;

const LogoTitle = styled(Logo)`
  height: 50px;
  margin: -15px;
`
const Login = () => {
  const [uesername, setuesername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Lógica de autenticação aqui
    console.log(`uesername: ${uesername}, Senha: ${password}`);
  };

  return (
    <div>
      <Row class="title">
        <h2>uece.</h2>
        <h2 style={{color:"#F2CE1B"}}>bet</h2>
        <LogoTitle></LogoTitle>
      </Row>
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