import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useNavigate } from 'react-router-dom';

function ProfileBtn({ userType }) {
    const navigate = useNavigate();

    const handleCreateEventClick = () => {
        // Navigate to the /login route
        navigate('/create-event');
    };
  const renderDropdownContent = () => {
    if (userType === 0) {
      return (
        <>
         
          <Dropdown.Item href="#/action-2">Histórico</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Suporte</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Notificações</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Transações</Dropdown.Item>
        </>
      );
    } else if (userType === 1) {
      return (
        <>
         <Dropdown.Item onClick={handleCreateEventClick}>Cadastrar Evento</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Histórico</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Suporte</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Notificações</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Transações</Dropdown.Item>
        </>
      );
    }

    return null;
  };

  return (
    <DropdownButton id="dropdown-basic-button" title="Dropdown button">
      {renderDropdownContent()}
    </DropdownButton>
  );
}

export default ProfileBtn;