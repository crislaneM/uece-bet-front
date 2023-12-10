import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import StdMenu from '../../Util/StdMenu';

const CreateEvent = () => {

    const [showConfirmationModal, setShowConfirmationModal] = useState(false);
    const [resetForm, setResetForm] = useState(false);

    const token = localStorage.getItem('token');

    // Decodifique o token para obter as informações
    const decodedToken = jwtDecode(token);


    // Extraia o id_adm do token decodificado
    const id = decodedToken.sub;
    
    const [formData, setFormData] = useState({
        id_adm: id,
        time_1: '',
        time_2: '',
        odd_time1: null,
        odd_time2: null,
        odd_empate: null,
        data: '',
        descricao: '',
        evento_status: true,
        modalidade_evento: ''
      });

      useEffect(() => {
        const headers = {
          Authorization: `Bearer ${token}`,
        };
    
        axios.defaults.headers.common = headers;
      }, [token]);

      useEffect(() => {
        if (resetForm) {
            setFormData({
                id_adm: id,
                time_1: '',
                time_2: '',
                odd_time1: null,
                odd_time2: null,
                odd_empate: null,
                data: '',
                descricao: '',
                evento_status: true,
                modalidade_evento: ''
            });
    
            setResetForm(false);
        }
    }, [resetForm]);
      
      const handleInputChange = (e) => {
        const { name, value, type, checked, files } = e.target;
        let newValue;
      
        if (name.startsWith('odd_')) {
          // Se o campo começa com 'odd_time', trata como um número
          newValue = parseFloat(value);
        } else {
          // Caso contrário, trata conforme o tipo padrão
          newValue = type === 'checkbox' ? checked : files ? files[0] : value;
        }
      
        setFormData((prevData) => ({
          ...prevData,
          [name]: newValue,
        }));
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await axios.post(
              'http://127.0.0.1:5000/evento/cadastrar',
              formData
            );
            console.log('Resposta do servidor:', response.data);
            setShowConfirmationModal(true);
            setResetForm(true);
          } catch (error) {
            console.error('Erro ao enviar dados:', error);
          }
      };
      const handleCloseModal = () => {
        // Redefina os valores dos inputs
        setFormData({
            id_adm: id,
            time_1: '',
            time_2: '',
            odd_time1: null,
            odd_time2: null,
            odd_empate: null,
            data: '',
            descricao: '',
            evento_status: true,
            modalidade_evento: ''
        });

        // Feche o modal
        setShowConfirmationModal(false);
    };

  return (
    <>
      <StdMenu />
      <Container className='create-container'>
        <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
                <Col>
                    <Form.Label>Time 1</Form.Label>
                    <Form.Control onChange={handleInputChange} name="time_1" type="text" placeholder="Digite o nome do Time 1" />       
                </Col>
                <Col>
                    <Form.Label>Time 2</Form.Label>
                    <Form.Control onChange={handleInputChange} name="time_2" type="text" placeholder="Digite o nome do Time 2" />
                </Col>
            </Row>
            <Row className="mb-3">
                <Col>
                    <Form.Label>Odd Time 1</Form.Label>
                    <Form.Control onChange={handleInputChange} name="odd_time1" type="text" />
                </Col>
                <Col>
                    <Form.Label>Odd Empate</Form.Label>
                    <Form.Control onChange={handleInputChange} name="odd_empate"  type="text" />
                </Col>
                <Col>
                    <Form.Label>Odd Time 2</Form.Label>
                    <Form.Control onChange={handleInputChange} name="odd_time2" type="text" />
                </Col>
            </Row>
            <Row className="mb-3">
                <Col>
                    <Form.Label>Data</Form.Label>
                    <Form.Control onChange={handleInputChange} name="data" type="date" />
                </Col>
            </Row>
            <Row>
            {['checkbox'].map((type) => (
                        <div key={`default-${type}`} className="mb-3">
                        <Form.Check 
                            type={type}
                            id={`default-${type}`}
                            label={`Importante`}
                        />
                        </div>
                    ))}
            </Row>
            <Row className="mb-3">
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Descrição do Evento</Form.Label>
                    <Form.Control onChange={handleInputChange} name="descricao" as="textarea" rows={5} />
                </Form.Group>
            </Row>
            <Button variant="primary" type="submit">
                Criar Evento
            </Button>
        </Form>
        <Modal show={showConfirmationModal} onHide={() => setShowConfirmationModal(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Evento Criado com Sucesso</Modal.Title>
            </Modal.Header>
            <Modal.Body>O seu evento foi cadastrado com sucesso!</Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={() => handleCloseModal()}>
                    Fechar
                </Button>
            </Modal.Footer>
        </Modal>
      </Container>
      <style type="text/css">
            {`

              .create-container{
                display: flex;
                position: absolute;
                padding: 25px;
                width: 65vw;
                height: 70vh;
                background: #192B41;
                justify-content: center;
                font-size: large;
              }


              .create-container input, .create-container textarea{
                background: #031539;
                color: white;
              }

              .create-container .form-check{
                display: flex;
                justify-content: flex-end;
              }

                `}
        </style>
    </>
    
  );
};

export default CreateEvent;