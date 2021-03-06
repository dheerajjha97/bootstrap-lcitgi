import React from 'react';
import {Nav,Navbar,NavDropdown,Container} from 'react-bootstrap';
import logo from '/assests/logo.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css';

const  Menu=()=>{
return(
  <Navbar collapseOnSelect expand="lg" bg="light" sticky="top">
  <Container>
  <Navbar.Brand href="#home"> <img
        src="https://stackblitz.com/files/react-hyvolc/github/dheerajjha97/bootstrap-lcitgi/master/src/assests/images (1).jpeg"
        width="60"                      
        height="60"
        className="d-inline-block align-top"
        alt="LCIT GROUP OF INSTITUTIONS"
      /></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>)
}

export default Menu;