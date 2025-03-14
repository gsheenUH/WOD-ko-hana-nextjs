'use client';

import { Container, Nav, Row, Col, Image } from 'react-bootstrap';
import { Facebook, Instagram, Twitter, Yelp } from 'react-bootstrap-icons';

const FooterSection = () => (
  <div className="bg-dark mt-auto">
    <Container>
      <Row className="py-3">
        <Col xs={6} className="justify-content-start">
          <Image src="./wod-ko-hana-logo.png" alt="Ko Hana Logo" width="200px" />
          <Row>
            <Nav>
              <Nav.Link className="footer" href="#">ALOHA@KOHANARUM.COM</Nav.Link>
              <Nav.Link className="footer" href="#">(808) 649-0830</Nav.Link>
              <Nav.Link className="footer" href="#">92-1770 Kunia Rd., #227, Kunia, HI 96759, USA</Nav.Link>
            </Nav>
          </Row>
        </Col>
        <Col xs={2} className="justify-content-center" />
        <Col className="rightCol justify-content-end">
          <Row>
            <Nav className="justify-content-end">
              <Nav.Link className="icons" href="#"><Instagram size="30px" /></Nav.Link>
              <Nav.Link className="icons" href="#"><Facebook size="30px" /></Nav.Link>
              <Nav.Link className="icons" href="#"><Twitter size="30px" /></Nav.Link>
              <Nav.Link className="icons" href="#"><Yelp size="30px" /></Nav.Link>
            </Nav>
          </Row>
          <Row>
            <Nav className="justify-content-end">
              <Nav.Link className="footer" href="#">TERMS & CONDITIONS</Nav.Link>
              <Nav.Link className="footer" href="#">PRIVACY POLICY</Nav.Link>
            </Nav>
          </Row>
        </Col>
      </Row>
    </Container>
  </div>
);

export default FooterSection;
