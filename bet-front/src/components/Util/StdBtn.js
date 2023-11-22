// src/components/.js
import React from 'react';
import styled from 'styled-components';

const StdButton= styled.button`
  background-color: #00A1E4;
  color: white;
  padding: 10px 15px;
  width: 100px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  margin-bottom: ${(props) => props.mgBottom || '0px'};
  font-size: ${(props) => props.fontSize || 'large'};

  &:hover {
    background-color: white;
    color: #00A1E4;
  }
`;

const StdBtn = ({ label, onClick }) => (
  <StdButton type="" onClick={onClick}>
    {label}
  </StdButton>
);

export default StdBtn;