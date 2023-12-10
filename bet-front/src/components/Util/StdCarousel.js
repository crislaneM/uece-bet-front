import axios from 'axios';
import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import Row from 'react-bootstrap/Row';

import StdCard from "./StdCards";

import "bootstrap/dist/css/bootstrap.min.css";

const StdCarousel = () => {
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    const fetchEventos = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5000/evento/todos_eventos');
        setEventos(response.data);
      } catch (error) {
        console.error('Erro ao buscar eventos:', error);
      }
    };

    fetchEventos();
  }, []);

  const renderStdCards = () => {
    const stdCards = [];

    for (let i = 0; i < eventos.length; i += 3) {
      const stdCardGroup = eventos.slice(i, i + 3).map((evento, index) => (
        <StdCard key={index} evento={evento} />
      ));

      stdCards.push(
        <Carousel.Item key={i}>
          <Row className="carr-row">
            {stdCardGroup}
          </Row>
        </Carousel.Item>
      );
    }

    return stdCards;
  };

  return (
    <>
      <Carousel className="slide-style" interval={null}>
        {renderStdCards()}
      </Carousel>
      <style type="text/css">
        {`
          .slide-style {
            display: flex;
            flex-direction: row;
            width: 50vw;
            height: 20vh;
            padding: 30px 80px;
          }

          .carr-row {
            justify-content: space-around;
          }
        `}
      </style>
    </>
  );
};

export default StdCarousel;
