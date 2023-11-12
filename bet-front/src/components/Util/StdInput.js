//Componente de input padrão 
import React from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 5px;
  align-self: baseline;
`;

const InputField = styled.input`
  margin-left: 5px;
  border-radius: 20px;
  width: 540px;
  height: 40px;
  color: white;
  background-color: #192B41;
`;

const StdInput = ({ label, value, onChange, type = 'text' }) => (
  <InputContainer>
    <Label>
      {label}:
    </Label>
    <InputField type={type} value={value} onChange={onChange} />
  </InputContainer>
);

export default StdInput;