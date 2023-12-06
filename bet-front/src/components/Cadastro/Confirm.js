import Container from 'react-bootstrap/Container';
import React from 'react';
import { ReactComponent as ConfirmLogo } from '../../confirm.svg';
import { useNavigate } from 'react-router-dom';
import StdBtn from '../Util/StdBtn';

const Confirm = () => {
    const navigate = useNavigate();

    const handleConfirm = () => {
        // Navigate to the /login route
        navigate('/login');
    };
  return (
    <>
      <Container className='confirm-container'>
        <ConfirmLogo className="logo" ></ConfirmLogo>
        <h5 className="confirm-text" >Cadastro realizado com sucesso</h5>
        <StdBtn label={'Confirmar'} onClick={handleConfirm}/>
      </Container>

      <style type="text/css">
            {`
              .confirm-container{
                display: flex;
                flex-direction: column;
                align-items: center;
                position: absolute;
                width: 65vw;
                height: 55vh;
                background: #192B41;
                justify-content: center;
                font-size: large;
              }

              .logo{
                margin-bottom: 20px;
              }

              .confirm-text{
                color: '#01C929';
                margin-bottom: 20px;
              }

                `}
        </style>
    </>
    
  );
};

export default Confirm;