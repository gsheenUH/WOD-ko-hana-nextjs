'use client';

import { Container, Row, Col } from 'react-bootstrap';

const HeroSection = () => (
  <Container fluid className="p-0">
    <Row
      className="align-items-center"
      style={{
        backgroundImage: "url('/wod-ko-hana-background.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '600px',
      }}
    >
      <Col className="d-flex align-items-center justify-content-center">
        <h1 className="text-white">OUR JOURNEY</h1>
      </Col>
    </Row>
  </Container>
);

export default HeroSection;
