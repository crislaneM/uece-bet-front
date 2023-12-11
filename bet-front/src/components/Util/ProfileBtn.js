import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useNavigate } from 'react-router-dom';

function ProfileBtn({ userType }) {
  const navigate = useNavigate();

  const handleCreateEventClick = () => {
    navigate('/create-event');
  };

  const handleLogout = () => {
    // Remova o token do localStorage
    localStorage.removeItem('token');
    navigate('/login');
  };

  const f = () =>{
    alert('Funcionalidade não implementada ainda')
  }

  const renderDropdownContent = () => {
    if (userType === 0 || userType === 1) {
      return (
        <>
          {userType === 1 && (
            <Dropdown.Item onClick={handleCreateEventClick}>Cadastrar Evento</Dropdown.Item>
          )}
          <Dropdown.Item onClick={f} >Histórico</Dropdown.Item>
          <Dropdown.Item onClick={f}>Suporte</Dropdown.Item>
          <Dropdown.Item onClick={f}>Notificações</Dropdown.Item>
          <Dropdown.Item onClick={f}>Transações</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item className="logOut" onClick={handleLogout}>Logout</Dropdown.Item>
        </>
      );
    }

    return null;
  };

  return (
    <>
      <DropdownButton id="dropdown-basic-button" title="Menu">
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
