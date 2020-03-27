import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Details = () => {
  return (
    <Container style={{ background: '#fff' }}>
      <Row>
        <Col>
          <Container>
            <Row>
              <Col></Col>
              <Col></Col>
            </Row>
          </Container>
        </Col>
        <Col>
          <Container>
            <Row>
              <Col></Col>
              <Col></Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default Details;
