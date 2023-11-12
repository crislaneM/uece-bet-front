// src/components/Cadastro.js
import React, { useState } from 'react';
import StdInput from '../Util/StdInput';
import StdBtn from '../Util/StdBtn';
import StdTitle from '../Util/Title';
import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;



const Cadastro = () => {
  const [uesername, setuesername] = useState('');
  const [email, setEmail] = useState('');
  const [nascinalidade, setNacionalidade] = useState('');
  const [endereco, setEndereco] = useState('');
  const [nascimento, setNascimento]= useState('');
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  

  const handleCadastro = () => {
    // Lógica de autenticação aqui
    const formData = {
        username: uesername,
        email: email,
        nacionalidade: nascinalidade,
        endereco:endereco,
        nascimento: nascimento,
        cpf: cpf,
        password:password,
      };
    
    console.log(formData);
  };

  return (
    <div>
      
      <StdTitle></StdTitle>
      <form>
        <StdInput
          label="Nome"
          value={uesername}
          onChange={(e) => setuesername(e.target.value)}
        />
         <StdInput
            label="Email"
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />

        <Row>
            <StdInput
                label="Nascimento"
                type="date"
                value={nascimento}
                width={'250px'}
                onChange={(e) => setNascimento(e.target.value)}
            />
            <StdInput
                label="Nacionalidade"
                value={nascinalidade}
                width={'250px'}
                onChange={(e) => setNacionalidade(e.target.value)}
            />
        </Row>
        <Row>
            <StdInput
                label="CPF"
                value={cpf}
                width={'250px'}
                onChange={(e) => setCpf(e.target.value)}
            />
            <StdInput
                label="Endereço"
                value={endereco}
                width={'250px'}
                onChange={(e) => setEndereco(e.target.value)}
            />
        </Row>     
         <StdInput
            label="Senha"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
         <StdInput
            label="Confirmar Senha"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <StdBtn label="Cadastrar" onClick={handleCadastro} />
      </form>
    </div>
  );
};

export default Cadastro;