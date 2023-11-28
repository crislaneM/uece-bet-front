import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import StdInput from '../Util/StdInput';
import StdBtn from '../Util/StdBtn';
import StdTitle from '../Util/Title';
import styled from 'styled-components';
import axios from 'axios';

const LinksRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: medium;
`;

const Login = () => {
  const navigate = useNavigate(); // useNavigate hook for programmatic navigation
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [emailError, setemailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();

    if (!email) {
      setemailError('Campo de preenchimento obrigatório');
    } else if (!email.includes('@')) {
      setemailError('Email Inválido: Necessário @');
    } else {
      setemailError('');
    }

    if (!password) {
      setPasswordError('Campo de preenchimento obrigatório');
    } else {
      setPasswordError('');
    }

    if (emailError || passwordError) {
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post('http://127.0.0.1:5000/usuario/login', {
        email: email,
        senha: password,
      });

      const token = response.data.tokens.access;
      localStorage.setItem('token', token);

      setSuccessMessage('Login bem-sucedido!');

      // Use navigate to redirect after login
      navigate('/Main');
    } catch (error) {
      console.error('Erro:', error);
      setSuccessMessage('');
      // Handle specific error messages as needed
    } finally {
      setLoading(false);
    }
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
          {successMessage && <p className='success'>{successMessage}</p>}
          <StdBtn label={loading ? 'Carregando...' : 'Entrar'} onClick={handleLogin} mgBotton={'20px'} />
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
          .error {
            font-size: 15px;
            color: red;
          }

          .success {
            font-size: 15px;
            color: green;
          }
        `}
      </style>
    </>
  );
};

export default Login;
