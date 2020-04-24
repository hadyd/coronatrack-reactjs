import React from "react";
import { Card, Button } from "react-bootstrap";
import { MdPhone } from "react-icons/md";
export function Contact() {
  return (
<center>
        <Card className="card-home">
          <Card.Body>
          <MdPhone /> Pertanyaan? COVID-19 Hotline 119
          </Card.Body>
        </Card>
        </center>   
  );
}
export default Contact;