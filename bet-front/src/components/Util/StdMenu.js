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

const StdMenu = () => {

    const token = localStorage.getItem('token');

    // Decodifique o token para obter as informações
    const decodedToken = jwtDecode(token);
    console.log(decodedToken.sub)

    const [authUser, setAuthUser] = useState([]);

    useEffect(() => {
        const authUser = async () => {
        try {
            const response = await axios.get(`http://127.0.0.1:5000/usuario/protegido/${decodedToken.sub}`);
            setAuthUser(response.data);
        } catch (error) {
            console.error('Erro ao buscar usuário:', error);
        }
        };

        authUser();
    }, [decodedToken.sub]);

    console.log(authUser.tipo_usuario);

    const userType = parseInt(authUser.tipo_usuario);
    const userSaldo = parseFloat(authUser.saldo)
 
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
                            <ListGroup.Item action href="#link3" className='filter-btn'>
                           Filtro 3
                            </ListGroup.Item>
                            <ListGroup.Item action href="#link4" className='filter-btn'>
                           Filtro 4
                            </ListGroup.Item>
                            <ListGroup.Item action href="#link5" className='filter-btn'>
                           Filtro 5
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
                    <StdTitle />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className='nav-utils'>
                    <Nav className="">
                        {userType === 0 && <>
                            <StdBtn label={'Depositar'} onClick={()=> console.log('1')}/>
                            <div className="saldo">R$:{userSaldo}</div>
                        </>
                       }
                        <ProfileBtn userType={userType} ></ProfileBtn>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
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

                `}
        </style>
    </>
    
  );
};

export default StdMenu;