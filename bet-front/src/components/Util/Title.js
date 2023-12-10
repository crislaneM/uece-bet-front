import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Logo } from '../../jogador-de-futebol 4.svg';
import { Link } from 'react-router-dom';

const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: ${(props) => (props.to ? 'pointer' : 'default')};
`;

const LogoTitle = styled(Logo)`
  height: ${(props) => props.size || '50px'};
  margin: -15px;
`;

const StdTitle = ({ logoSize, to }) => (
  <Link to={to && '/main'} style={{ textDecoration: 'none' }}>
    <Row className="title" to={to && '/main'}>
      <h2 style={{ color: "#FFF" }}>uece.</h2>
      <h2 style={{ color: "#F2CE1B" }}>bet</h2>
      <LogoTitle size={logoSize} />
    </Row>
  </Link>
);

export default StdTitle;
