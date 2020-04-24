import React from "react";
import { Carousel } from "react-bootstrap";
import Header from "./image/Header.jpg";

const Crsl = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={Header} alt="First slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Crsl;