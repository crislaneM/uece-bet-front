import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useNavigate } from 'react-router-dom';

function ProfileBtn({ userType }) {
  const navigate = useNavigate();

  const handleCreateEventClick = () => {
    // Navigate to the /create-event route
    navigate('/create-event');
  };

  const handleLogout = () => {
    // Remova o token do localStorage ou execute qualquer outra lógica de logout necessária
    localStorage.removeItem('token');
    // Redirecione para a página de login ou qualquer outra página apropriada
    navigate('/login');
  };

  const renderDropdownContent = () => {
    if (userType === 0 || userType === 1) {
      return (
        <>
          {userType === 1 && (
            <Dropdown.Item onClick={handleCreateEventClick}>Cadastrar Evento</Dropdown.Item>
          )}
          <Dropdown.Item href="#/action-2">Histórico</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Suporte</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Notificações</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Transações</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item className="logOut" onClick={handleLogout}>Logout</Dropdown.Item>
        </>
      );
    }

    return null;
  };

  return (
    <>
      <DropdownButton id="dropdown-basic-button" title="Dropdown button">
        {renderDropdownContent()}
      </DropdownButton>
      <style type="text/css">
        {`
          .logOut{
            color: red;
          }

          .logOut:hover{
            background: red;
            color: white;
          }

        
        `}
      </style>
    
    </>
   
  );
}

export default ProfileBtn;
