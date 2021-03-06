import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import * as Icon from 'react-bootstrap-icons';

const QuickLink=()=>{
  return (
    <Container fluid className="mx-auto m-5 text-center">
      <Row>
        <Col>
        <h2>Quick Links </h2>
        
        </Col>
      </Row>

      <Row>
        <Col sm> 
        
        <Container className="border display-1 border-success mx-auto"
>
<Icon.PeopleFill/>
        </Container>
        
        </Col>
        <Col sm>sm=true</Col>
        <Col sm>sm=true</Col>
        <Col sm>sm=true</Col>
        <Col sm>sm=true</Col>
        <Col sm>sm=true</Col>
        <Col sm>sm=true</Col>
      </Row>
    </Container>
  );
};

export default QuickLink;
