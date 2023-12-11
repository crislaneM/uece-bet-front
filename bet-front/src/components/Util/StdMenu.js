import React, { useEffect, useState } from "react";
import StdTitle from '../Util/Title';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import StdBtn from './StdBtn';
import { jwtDecode } from 'jwt-decode';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import ProfileBtn from './ProfileBtn';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';

const StdMenu = () => {

    const token = localStorage.getItem('token');
    const decodedToken = jwtDecode(token);
    const [authUser, setAuthUser] = useState({});
    const userType = parseInt(authUser.tipo_usuario);
    const [userSaldo, setUserSaldo] = useState(parseFloat(authUser.saldo));
    const [casaSaldo, setCasaSaldo] = useState(100);
    const [shouldUpdateSaldo, setShouldUpdateSaldo] = useState(false);
    const [depositValue, setDepositValue] = useState('');
    const [showDepositModal, setShowDepositModal] = useState(false);

    useEffect(() => {
        const updateCasaSaldo = async () => {
          try {
            const response = await axios.get(`http://127.0.0.1:5000/carteira/ver_saldo/adm`);
            setCasaSaldo(parseFloat(response.data.saldo));
            console.log(response.data);
          } catch (error) {
            console.error('Erro ao buscar saldo da casa:', error);
          }
        };
    
        if (userType === 1) {
          // Only update casaSaldo for userType 1 (assuming userType 1 corresponds to the casa)
          updateCasaSaldo();
        }
      }, [userType]); 
      
      const handleCasaDeposit = async () => {
        const headers = {
            Authorization: `Bearer ${token}`,
          };
      
          axios.defaults.headers.common = headers;
        try {
        const response = await axios.post(
            `http://127.0.0.1:5000/carteira/depositar/adm`,
            { deposito2: parseFloat(depositValue) }
        );
        setShouldUpdateSaldo(true);
        console.log(response)
        } catch (error) {
            console.error('Erro ao fazer depósito:', error);
        }
    };

    useEffect(() => {
        const fetchUser = async () => {
          try {
            const response = await axios.get(`http://127.0.0.1:5000/usuario/protegido/${decodedToken.sub}`);
            setAuthUser(response.data);
            setUserSaldo(parseFloat(response.data.saldo));
          } catch (error) {
            console.error('Erro ao buscar usuário:', error);
          }
        };
    
        fetchUser();
      }, [decodedToken.sub, shouldUpdateSaldo]);

    const handleDeposit = async () => {
        try {
        const response = await axios.post(
            `http://127.0.0.1:5000/carteira/depositar/${decodedToken.sub}`,
            { deposito: parseFloat(depositValue) }
        );
        setShouldUpdateSaldo(true);
        console.log(response)
        } catch (error) {
            console.error('Erro ao fazer depósito:', error);
        }
    };

    useEffect(() => {
        const updateSaldo = async () => {
        try {
            const response = await axios.get(`http://127.0.0.1:5000/usuario/protegido/${decodedToken.sub}`);
            setUserSaldo(parseFloat(response.data.saldo));
        } catch (error) {
            console.error('Erro ao buscar usuário após depósito:', error);
        }
        };

        if (shouldUpdateSaldo) {
        updateSaldo();
        setShouldUpdateSaldo(false); // Resetar a flag após a atualização
        }
    }, [shouldUpdateSaldo, decodedToken.sub]);

    const handleCloseDepositModal = () => setShowDepositModal(false);

    useEffect(() => {
        const updateSaldo = async () => {
          try {
            const response = await axios.get(`http://127.0.0.1:5000/usuario/protegido/${decodedToken.sub}`);
            setUserSaldo(parseFloat(response.data.saldo));
          } catch (error) {
            console.error('Erro ao buscar usuário após depósito:', error);
          }
        };
      
        if (shouldUpdateSaldo) {
          updateSaldo();
          setShouldUpdateSaldo(false); // Resetar a flag após a atualização
        }
      }, [shouldUpdateSaldo, decodedToken.sub]);

      
 
    const options = [
        {
          name: 'Enable body scrolling',
          scroll: true,
          backdrop: false,
        }
      ];

      function SideBar({ name, ...props }) {
        const [show, setShow] = useState(false);
      
        const toggleShow = () => setShow((s) => !s);
      
        return (
          <>
            <StdBtn label={'Menu'} onClick={toggleShow }/>
            <Offcanvas show={show} {...props}>
              <Offcanvas.Body>
                <Tab.Container id="list-group-tabs-example">
                    <Row>
                        <ListGroup>
                            <ListGroup.Item action href="#link1" className='filter-btn'>
                           Filtro 1
                            </ListGroup.Item>
                            <ListGroup.Item action href="#link2" className='filter-btn'>
                           Filtro 2
                            </ListGroup.Item>
                        </ListGroup>
                    </Row>
                </Tab.Container>
              </Offcanvas.Body>
            </Offcanvas>
          </>
        );
      }

  return (
    <>
        <Navbar fixed="top" expand="lg" className='primary-color'>
            <Container>
                <Navbar.Brand href="#home">
                {options.map((props, idx) => (
                    <SideBar key={idx} {...props} />
                ))}
                    <StdTitle to={'/main'} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className='nav-utils'>
                    <Nav className="">
                        <StdBtn label={'Depositar'}onClick={() => setShowDepositModal(true)} />
                        {userType === 0 && <>
                            <div className="saldo">R$:{userSaldo}</div>
                        </>
                       }
                        {userType === 1 && <>
                            <div className="saldo">R$:{casaSaldo}</div>
                        </>
                       }
                        <ProfileBtn userType={userType} ></ProfileBtn>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <Modal show={showDepositModal} onHide={handleCloseDepositModal} >
            <Modal.Header closeButton className="deposit-Modal">
                <StdTitle />
            </Modal.Header>
            <Modal.Body className="deposit-Modal">
                <p>Informe o valor que deseja depositar:</p>
                <input className="deposit-input" type="number" value={depositValue} onChange={(e) => setDepositValue(e.target.value)} />
            </Modal.Body>
            <Modal.Footer className="deposit-Modal">
                <Button variant="secondary" onClick={handleCloseDepositModal}>
                Fechar
                </Button>
                {userType === 0 && <>
                        <Button variant="primary" onClick={() => { handleDeposit(); }}>
                            Depositar
                        </Button>
                        </>
                }
                {userType === 1 && <>
                        <Button variant="primary" onClick={() => { handleCasaDeposit(); }}>
                            Depositar
                        </Button>
                        </>
                }
                
            </Modal.Footer>
        </Modal>
        <style type="text/css">
            {`
                .saldo{
                    color: #F2CE1B;
                    font-size: 30px;
                    margin: 0 15px;
                }

                .navbar-brand{
                    display: flex;
                    flex-direction: row;

                }

                .primary-color {
                    background-color: #192B41;
                    color: white;
                }

                .nav-utils{
                    justify-content: flex-end;
                }

                .container{
                    margin-left: 5vw !important;
                    max-width: 90vw !important ;
                    height: 5vh;
                }
                .offcanvas.offcanvas-start{
                    top: 6.7vh;
                }

                .offcanvas-body{
                    background-color: #192B41;
                }

                .filter-btn{
                    background: #031539;
                    color: #fff;
                }

                .deposit-Modal{
                    background: #031539;
                    color: #fff;
                }

                .deposit-input{
                    width: 100%;
                    color: white;
                    background: #031539;
                    text-align: center;
                }

                `}
        </style>
    </>
    
  );
};

export default StdMenu;