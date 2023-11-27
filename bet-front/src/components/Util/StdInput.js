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
  font-size: medium;
`;

const InputField = styled.input`
  margin-left: 5px;
  padding-left: 15px;
  border-radius: 20px;
  width: ${(props) => props.size || '540px'};
  height: 40px;
  color: white;
  background-color: #192B41;
  font-size: medium;
`;

const StdInput = ({ label, value, onChange, type = 'text', width}) => (
  <InputContainer>
    <Label>
      {label}:
    </Label>
    <InputField type={type} value={value} onChange={onChange} size={width} />
  </InputContainer>
);

export default StdInput;