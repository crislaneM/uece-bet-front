import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import StdCard from "./StdCards";
import Row from 'react-bootstrap/Row';

const StdCarousel = () => {
  return (
    <>
        <Carousel className="slide-style" interval={null}>
          <Carousel.Item >
            <Row className="carr-row"> 
              <StdCard/>
              <StdCard/>
              <StdCard/>
            </Row>
          </Carousel.Item>

          <Carousel.Item>
            <Row className="carr-row">
              <StdCard/>
              <StdCard/>
              <StdCard/>
            </Row>
          </Carousel.Item>

          <Carousel.Item>
            <Row className="carr-row">
              <StdCard/>
              <StdCard/>
              <StdCard/>
            </Row>
          </Carousel.Item>
        </Carousel>
        <style type="text/css">
            {`

              .slide-style{
                display: flex;
                flex-direction: row;
                width: 50vw;
                height: 20vh;
                padding: 30px 80px;
              }

              .carr-row{
                justify-content: space-around;
              }
                `}
        </style>
        
    </>
    
  );
};

export default StdCarousel;