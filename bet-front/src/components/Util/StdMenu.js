import StdTitle from '../Util/Title';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import StdBtn from './StdBtn';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

const StdMenu = () => {

    const navigate = useNavigate();

    const handleLoginClick = () => {
        // Navigate to the /login route
        navigate('/login');
    };

    const options = [
        {
          name: 'Enable body scrolling',
          scroll: true,
          backdrop: false,
        }
      ];

      function SideBar({ name, ...props }) {
        const [show, setShow] = useState(true);
      
        const toggleShow = () => setShow((s) => !s);
      
        return (
          <>
            <StdBtn label={'Menu'} onClick={toggleShow }/>
            <Offcanvas show={show} {...props}>
              <Offcanvas.Body>
                <Tab.Container id="list-group-tabs-example">
                    <Row>
                        <ListGroup>
                            <ListGroup.Item action href="#link1">
                            Link 1
                            </ListGroup.Item>
                            <ListGroup.Item action href="#link2">
                            Link 2
                            </ListGroup.Item>
                            <ListGroup.Item action href="#link3">
                            Link 3
                            </ListGroup.Item>
                            <ListGroup.Item action href="#link4">
                            Link 4
                            </ListGroup.Item>
                            <ListGroup.Item action href="#link5">
                            Link 5
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
                        <StdBtn label={'Login'} onClick={handleLoginClick}/>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <style type="text/css">
            {`
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

                `}
        </style>
    </>
    
    // <div>
    
    //   <StdTitle />
    // </div>
  );
};

export default StdMenu;