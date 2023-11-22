import StdTitle from '../Util/Title';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import StdBtn from './StdBtn';

const StdMenu = () => {

  return (
    <>
        <Navbar fixed="top" expand="lg" className='primary-color'>
            <Container>
                <Navbar.Brand href="#home">
                    <StdTitle />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className='nav-utils'>
                    <Nav className="">
                        <StdBtn label={'Login'}/>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <style type="text/css">
            {`
                .primary-color {
                    background-color: #192B41;
                    color: white;
                }

                .nav-utils{
                    justify-content: flex-end;
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