import React, { useState } from 'react';
import { Modal, Button, Card, Container, Row, Col, Image, ListGroup, Form } from 'react-bootstrap';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

function StdCard({ evento, idEvento }) {
    const token = localStorage.getItem('token');
    const decodedToken = jwtDecode(token);
  const [showModal, setShowModal] = useState(false);
  const [aposta, setAposta] = useState(null);
  const [valorAposta, setValorAposta] = useState('');

  const handleModalOpen = () => setShowModal(true);
  const handleModalClose = () => setShowModal(false);

  const handleApostaChange = (timeApostado, odd) => {
    setAposta({ timeApostado, odd });
  };

  const handleValorApostaChange = (novoValorAposta) => {
    setValorAposta(novoValorAposta);
  };

  const handleApostar = async () => {
    try {
      // Verifica se a aposta e o valor da aposta foram selecionados
      if (!aposta || !valorAposta) {
        console.error('Selecione a aposta e insira o valor da aposta.');
        return;
      }
  
      // Cria um objeto com os dados da aposta
      const apostaData = {
        id_evento: evento.id,
        id_apostador: decodedToken.sub,
        resultado_apostado: aposta.timeApostado,
        odd_apostada: parseFloat(aposta.odd),
        valor_apostado: parseFloat(valorAposta),
      };

      const headers = {
        Authorization: `Bearer ${token}`,
      };
  
      axios.defaults.headers.common = headers;

  
      // Faz a requisição para o back-end
      const response = await axios.post(
        `http://127.0.0.1:5000/apostas/apostar/${evento.id}`, // Substitua pela sua URL de backend
        apostaData
      );
  
      console.log('Aposta realizada com sucesso:', response.data);
  
      handleModalClose();
      window.location.reload();
    } catch (error) {
      console.error('Erro ao fazer aposta:', error);
    }
  };

  return (
    <>
      <Card style={{ width: '15rem', height: '8rem' }} className='card-color' onClick={handleModalOpen}>
        <Card.Body>
          <Container className='card-container'>
            <Row>
              <Col xs={6} md={4} className='card-colum'>
                <Image className="team" src="/teste" rounded />
                <p>{evento.odd_time1}</p>
              </Col>
              <Col xs={6} md={4} className='card-colum'>
                <h5 className="draw">X</h5>
                <Card.Text>{evento.odd_empate}</Card.Text>
              </Col>
              <Col xs={6} md={4} className='card-colum'>
                <Image className="team" src="/teste" rounded />
                <Card.Text>{evento.odd_time2}</Card.Text>
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
      <Modal className="std-modal" show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Apostar em: {evento.time_1} X {evento.time_2}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup horizontal>
            <ListGroup.Item className='aposta-input'>
              <Image className="team" src="/teste" rounded />
              <label>Vitória de {evento.time_1}</label>
              <input
                type="radio"
                name="aposta"
                value={evento.time_1}
                checked={aposta && aposta.timeApostado === evento.time_1}
                onChange={() => handleApostaChange(evento.time_1, evento.odd_time1)}
                />
              <h5>{evento.odd_time1}</h5>
            </ListGroup.Item>
            <ListGroup.Item className='aposta-input'>
              <label>Empate</label>
              <input
                type="radio"
                name="aposta"
                value='empate'
                checked={aposta && aposta.timeApostado === 'empate'}
                onChange={() => handleApostaChange('empate', evento.odd_empate)}
                />
              <h5>{evento.odd_empate}</h5>
            </ListGroup.Item>
            <ListGroup.Item className='aposta-input'>
              <Image className="team" src="/teste" rounded />
              <label>Vitória de {evento.time_2}</label>
              <input
                type="radio"
                name="aposta"
                value={evento.time_2}
                checked={aposta && aposta.timeApostado === evento.time_2}
                onChange={() => handleApostaChange(evento.time_2, evento.odd_time2)}
                />
              <h5>{evento.odd_time2}</h5>
            </ListGroup.Item>
          </ListGroup>
          <Form.Group className="mb-3" controlId="descricao">
            <h3 className='desc-label'>Descrição do evento:</h3>
            <Form.Control
              as="textarea"
              rows={3}
              value={evento.descricao}
              readOnly
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="valorAposta">
            <Form.Label>Valor da aposta:</Form.Label>
            <Form.Control
              type="number"
              value={valorAposta}
              onChange={(e) => handleValorApostaChange(e.target.value)}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Fechar
          </Button>
          <Button variant="primary" onClick={handleApostar}>
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

            .list-group-horizontal{
                width: 100%;
            }

            .list-group-item{
                width:-webkit-fill-available;
            }

            .aposta-input{
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: center;
                text-align: center;
                color: white;
                background: #031539;
            }

            .aposta-input h5{
                color: #F2CE1B;
            }

            .desc-label{
                color: #F2CE1B;
                margin: 20px 5px;
            }
            `}
      </style>
    </>
  );
}

export default StdCard;
