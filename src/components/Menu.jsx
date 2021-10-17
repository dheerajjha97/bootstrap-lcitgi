import React from 'react';
import {Nav,Navbar,NavDropdown,Container} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

const  Menu=()=>{
return(
  <Navbar collapseOnSelect expand="lg" bg="light" sticky="top">
  <Container>
  <Navbar.Brand href="#home"> <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXk98TI4PGrH4ySC2Sic4d-_cZMzJFBCnRjw&usqp=CAU"
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