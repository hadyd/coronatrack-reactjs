import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Col, Row } from "react-bootstrap";

import Sick from "./image/sick.png";
import Recovery from "./image/recovery.png";
import Death from "./image/death.png";

const Data = () => {
  const [korban, setKorban] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.kawalcorona.com/indonesia/")
      .then((res) => setKorban(res.data[0]));
  }, []);

  return (
    <Row>
      <Col xs={100} md={4}>
        <Card className="card">
          <Card.Body>
            <img
              src={Sick}
              alt="Confirmed"
              className="d-block mx-auto"
              width="215"
              height="215"
            />
            <Card.Title className="text-center mt-2">Confirmed</Card.Title>
            <h3 className="text-center text-secondary">{korban.positif}</h3>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={12} md={4}>
        <Card className="card">
          <Card.Body>
            <img
              src={Recovery}
              alt="Recovered"
              className="d-block mx-auto"
              width="215"
              height="215"
            />
            <Card.Title className="text-center mt-2">Recovered</Card.Title>
            <h3 className="text-center text-success">{korban.sembuh}</h3>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={12} md={4}>
        <Card className="card">
          <Card.Body>
            <img
              src={Death}
              alt="Deaths"
              className="d-block mx-auto"
              width="215"
              height="215"
            />
            <Card.Title className="text-center mt-2">Deaths</Card.Title>
            <h3 className="text-center text-danger">{korban.meninggal}</h3>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default Data;