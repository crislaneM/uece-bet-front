
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';


function StdCard() {
  return (
    <>
    <Card style={{ width: '15rem', height: '8rem' }}  className='card-color'>
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
    <style type="text/css">
            {`

                .card-color {
                    background-color: #192B41;
                    color: white;
                    font-size: medium;
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



                `}
        </style>
    
    </>
   
    
  );
}

export default StdCard;