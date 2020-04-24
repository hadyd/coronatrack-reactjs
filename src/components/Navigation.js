import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsInfoCircleFill } from "react-icons/bs";
import { MdPhone } from "react-icons/md";

const Navigation = () => {
  return (
    <Navbar expand="lg" variant="dark" sticky="top">
      <Link to="/" className="navbar-brand">
        Indonesia Corona Tracker
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Link to="/about" className="nav-link mx-2">
            <BsInfoCircleFill /> About
          </Link>
          <Link to="/hotline" className="nav-link mx-2">
            <MdPhone /> Pertanyaan? COVID-19 Hotline 119
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Navigation;
