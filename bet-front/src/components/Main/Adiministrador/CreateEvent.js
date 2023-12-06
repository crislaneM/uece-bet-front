import React, { useState } from 'react';
import StdMenu from '../../Util/StdMenu';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import axios from 'axios';

const CreateEvent = () => {
    const [formData, setFormData] = useState({
        id_adm: 1,
        time_1: '',
        time_2: '',
        odd_time1: null,
        odd_time2: null,
        odd_empate: null,
        data: '',
        descricao: '',
        evento_status: true,
      });
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
            // Adicione aqui a lógica para lidar com a resposta do servidor conforme necessário
          } catch (error) {
            console.error('Erro ao enviar dados:', error);
          }
      };

  return (
    <>
      <StdMenu />
      <Container className='create-container'>
        <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
                <Col>
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Time 1</Form.Label>
                        <Form.Control   type="file" />
                    </Form.Group>
                    <Form.Control onChange={handleInputChange} name="time_1" type="text" placeholder="Digite o nome do Time 1" />       
                </Col>
                <Col>
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Time 2</Form.Label>
                        <Form.Control type="file" />
                    </Form.Group>
                    <Form.Control onChange={handleInputChange} name="time_2" type="text" placeholder="Digite o nome do Time 2" />
                </Col>
            </Row>
            <Row className="mb-3">
                <Col>
                    <Form.Label>Odd Time 1</Form.Label>
                    <Form.Control onChange={handleInputChange} name="odd_time1" type="number" />
                </Col>
                <Col>
                    <Form.Label>Odd Empate</Form.Label>
                    <Form.Control onChange={handleInputChange} name="odd_empate"  type="number" />
                </Col>
                <Col>
                    <Form.Label>Odd Time 2</Form.Label>
                    <Form.Control onChange={handleInputChange} name="odd_time2" type="number" />
                </Col>
            </Row>
            <Row className="mb-3">
                <Col>
                    <Form.Label>Horário</Form.Label>
                    <Form.Control type="time" />
                </Col>
                <Col>
                    <Form.Label>Data</Form.Label>
                    <Form.Control onChange={handleInputChange} name="data" type="date" />
                </Col>
                <Col>
                    <Form.Label>Local</Form.Label>
                    <Form.Control type="text" />
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
      </Container>
      <style type="text/css">
            {`

              .create-container{
                display: flex;
                position: absolute;
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