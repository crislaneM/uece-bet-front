import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';


function ImpCard() {
  return (
    <>
    <Card style={{ width: '50rem', height: '8rem' }}  className='imp-card-color'>
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
                            <h5 className="draw">X</h5>
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
    <style type="text/css">
            {`

                .imp-card-color {
                    background-color: #192B41;
                    color: white;
                }

                .card-container{
                    margin-left: 0 !important;

                }

                .team{
                    max-height: 50px;
                    max-width:50px;
                }

                .draw{
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



                `}
        </style>
    
    </>
   
    
  );
}

export default ImpCard;