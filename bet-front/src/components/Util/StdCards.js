
import React, { useState } from 'react';
import { Modal, Button, Card, Container, Row, Col, Image, ListGroup } from 'react-bootstrap';

function StdCard() {
    const [showModal, setShowModal] = useState(false);

    const handleModalOpen = () => setShowModal(true);
    const handleModalClose = () => setShowModal(false);

  return (
    <>
    <Card style={{ width: '15rem', height: '8rem' }}  className='card-color' onClick={handleModalOpen} >
      <Card.Body>
        <Container className='card-container'>
            <Row>
                <Col xs={6} md={4} className='card-colum'>
                    <Image className="team" src="/teste" rounded />
                    <p>
                        0.0
                    </p>
                </Col>
                <Col xs={6} md={4} className='card-colum'>
                    <h5 className="draw">
                            X
                    </h5>
                    <Card.Text>
                        0.0
                    </Card.Text>
                </Col>
                <Col xs={6} md={4} className='card-colum'>
                    <Image className="team" src="/teste" rounded  />
                    <Card.Text>
                        0.0
                    </Card.Text>  
                </Col>
            </Row>
         </Container>
      </Card.Body>
    </Card>
    <Modal className="std-modal" show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Apostar em : Time 1 X Time 2</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <ListGroup horizontal>
                <Image className="team" src="/teste" rounded  />
                <ListGroup.Item>Empate</ListGroup.Item>
                <Image className="team" src="/teste" rounded  />
            </ListGroup>
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

                .card-color {
                    background-color: #192B41;
                    color: white;
                    font-size: medium;
                    cursor: pointer;
                }

                .card-color:hover{
                    border: solid 1px #FFF;
                }

                .card-container{
                    margin-left: 0 !important;

                }

                .team{
                    max-height: 50px;
                    max-width:50px;
                }

                .card-colum{
                    font-size: medium;
                }

                .card-colum p{
                    position: relative;
                    margin-top: 3rem;
                }

                .std-modal{
                    margin: 10vh 25vw;
                    width: 50vw;
                    height: 75vh;
                }

                .std-modal .modal-content{
                    width: 35vw;
                    height: 65vh;
                }


                `}
        </style>
    
    </>
   
    
  );
}

export default StdCard;