import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Logo } from '../../jogador-de-futebol 4.svg';

const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoTitle = styled(Logo)`
  height: ${(props) => props.size || '50px'}; // Usando uma prop para definir a altura da logo
  margin: -15px;
`;

const StdTitle = ({ logoSize }) => (
  <Row className="title">
    <h2 style={{ color: "#FFF" }}>uece.</h2>
    <h2 style={{ color: "#F2CE1B" }}>bet</h2>
    <LogoTitle size={logoSize} />
  </Row>
);

export default StdTitle;