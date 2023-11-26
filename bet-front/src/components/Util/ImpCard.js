import React, { useState } from 'react';
import { Modal, Button, Card, Container, Row, Col, Image, ListGroup } from 'react-bootstrap';


function ImpCard() {
    const [showModal, setShowModal] = useState(false);

    const handleModalOpen = () => setShowModal(true);
    const handleModalClose = () => setShowModal(false);

  return (
    <>
    <Card style={{ width: '50rem', height: '8rem' }}  className='imp-card-color'  onClick={handleModalOpen}>
      <Card.Body>
        <Container className='card-container imp-card-container'>
            <Row className='imp-card-row'>
                <Col xs={6} md={4}>
                    <Row>
                        <Col xs={6} md={4}>
                            <Image className="team" src="/teste" rounded  />
                            <Card.Text>0.0</Card.Text>
                        </Col>
                        <Col xs={6} md={4}>
                            <h5 className="imp-draw">X</h5>
                            <Card.Text>0.0</Card.Text>
                        </Col>
                        <Col xs={6} md={4}>
                            <Image className="team" src="/teste" rounded  />
                            <Card.Text>0.0</Card.Text>
                        </Col>
                    </Row>          
                </Col>
                <Col xs={6} md={4}>
                   <h3>Ceara X Fortaleza</h3>
                   <Card.Text className='imp-card-desc'>final da Fares Lopes</Card.Text>
                   <Card.Text className='imp-card-desc'>21:30</Card.Text>
                </Col>
                <Col xs={6} md={4}>
                    <Image className="team" src="/teste" />
                </Col>
            </Row>
         </Container>
      </Card.Body>
    </Card>
    <Modal className="stdModal" show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Apostar em : Time 1 X Time 2 </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <ListGroup horizontal>
                    <ListGroup.Item>Vitória do Time 1</ListGroup.Item>
                    <ListGroup.Item>Empate</ListGroup.Item>
                    <ListGroup.Item>Vitória do Time 2</ListGroup.Item>
            </ListGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Fechar
          </Button>
          <Button variant="primary" onClick={handleModalClose}>
            Apostar
          </Button>
        </Modal.Footer>
      </Modal>
    <style type="text/css">
            {`

                .imp-card-color {
                    background-color: #192B41;
                    color: white;
                    cursor: pointer;
                }

                .imp-card-color:hover{
                    border: solid 1px #F2CE1B;
                }

                .card-container{
                    margin-left: 0 !important;

                }

                .team{
                    max-height: 50px;
                    max-width:50px;
                }

                .imp-draw{
                    margin-bottom: 5px;
                }

                .imp-card-container{
                    padding: 0; 
                }

                .imp-card-row{
                    align-items: baseline;
                }

                .imp-card-desc{
                    font-size: medium;
                    color: #F2CE1B;
                    text-align: start;
                }

                .std-modal{
                    margin: 10vh 25vw;
                    width: 50vw;
                    height: 75vh;
                }

                .std-modal .modal-content{
                    width: 35vw;
                    height: 65vh;
                    background-color: #192B41;
                    color: #fff;
                }



                `}
        </style>
    
    </>
   
    
  );
}

export default ImpCard;