import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import {Navbar , Container , Nav , Offcanvas} from 'react-bootstrap';

function Header() {
  return (
        <Navbar key="xl" expand="xl" className="mb-3">
          <Container fluid >
            <Navbar.Brand href="#" className="fontsize"><span>T </span><span>O </span><span>C </span><span>U </span><span>L </span></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-$xl`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-$xl`}
              aria-labelledby={`offcanvasNavbarLabel-expand-$xl`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-$xl`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-1 gap-5 fontsize">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="about">About</Nav.Link>
                  <Nav.Link href="prices">Pricing</Nav.Link>
                  <Nav.Link href="team">Our Team </Nav.Link>
                  <Nav.Link href="signup" style={{backgroundColor: "#013B85" , color: "white"}}>Login / SignUp</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      );
}

export default Header;