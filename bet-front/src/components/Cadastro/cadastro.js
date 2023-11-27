import React, { useState } from 'react';
import StdInput from '../Util/StdInput';
import StdBtn from '../Util/StdBtn';
import StdTitle from '../Util/Title';
import { Col, Row } from 'react-bootstrap';

const Cadastro = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [nacionalidade, setNacionalidade] = useState('');
  const [nascimento, setNascimento] = useState('');
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [cpfError, setCpfError] = useState('');
  const [nascimentoError, setNascimentoError] = useState('');
  const [nacionalidadeError, setNacionalidadeError] = useState('');


  const handleCadastro = (event) => {
    event.preventDefault(); // Prevents the default form submission behavior

    // Simple validation example
    if (!username) {
      setUsernameError('Campo de preenchimento obrigatório');
    } else {
      setUsernameError('');
    }

    if (!email) {
      setEmailError('Campo de preenchimento obrigatório');
    } else {
      setEmailError('');
    }

    if (!password) {
      setPasswordError('Campo de preenchimento obrigatório');
    } else {
      setPasswordError('');
    }

    if (password !== confirmPassword) {
      setConfirmPasswordError('Não confere com o campo senha');
    } else {
      setConfirmPasswordError('');
    }

    if (!nacionalidade) {
      setNacionalidadeError('Campo de preenchimento obrigatório');
    } else {
      setNacionalidadeError('');
    }

    if (!cpf) {
      setCpfError('Campo de preenchimento obrigatório');
    } else {
      setCpfError('');
    }

    if (!nascimento) {
      setNascimentoError('Campo de preenchimento obrigatório');
    } else {
      setNascimentoError('');
    }

    if (usernameError || emailError || passwordError || confirmPasswordError || cpfError || nascimentoError || nacionalidadeError) {
      console.log('Erro no cadastro')
    }
    else{
      const formData = {
        nome: username,
        nascimento: nascimento,
        cpf: cpf,
        nacionalidade: nacionalidade,
        email: email,
        password: password,
      };
      console.log(formData);
    }
   
  };

  return (
    <>
      <div>
        <StdTitle></StdTitle>
        <form onSubmit={handleCadastro}>
          <StdInput
            label="Nome"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {usernameError && <p className='error'>{usernameError}</p>}
          <StdInput
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && <p className='error'>{emailError}</p>}
          <Row>
            <Col>
              <StdInput
                label="Nascimento"
                type="date"
                value={nascimento}
                width={'250px'}
                onChange={(e) => setNascimento(e.target.value)}
              />
              {nascimentoError && <p className='error'>{emailError}</p>}
            </Col>
            <Col>
              <StdInput
                label="Nacionalidade"
                value={nacionalidade}
                width={'250px'}
                onChange={(e) => setNacionalidade(e.target.value)}
              />
              {nacionalidadeError && <p className='error'>{emailError}</p>}
            
            </Col>
           
          </Row>
          <StdInput
              label="CPF"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
            />
            {cpfError && <p className='error'>{emailError}</p>}
          <StdInput
            label="Senha"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {passwordError && <p className='error'>{passwordError}</p>}
          <StdInput
            label="Confirmar Senha"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {confirmPasswordError && (
            <p className='error'>{confirmPasswordError}</p>
          )}
          <StdBtn label="Cadastrar" />
        </form>
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

export default Cadastro;