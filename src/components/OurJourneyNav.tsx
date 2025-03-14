'use client';

import { Nav, Navbar, Container } from 'react-bootstrap';
import { Cart2 } from 'react-bootstrap-icons';

const OurJourneyNav = () => (
  <Navbar bg="dark" variant="dark" expand="lg">
    <Container>
      <Navbar.Brand href="#">
        <img
          src="/wod-ko-hana-logo.png" // adjust path as needed
          alt="Ko Hana Logo"
          style={{ maxHeight: '50px' }}
        />
      </Navbar.Brand>
      <Navbar.Toggle />

      <Navbar.Collapse>
        <Nav className="ms-auto">
          <Nav.Link className="menu current" href="#">OUR JOURNEY</Nav.Link>
          <Nav.Link className="menu" href="#">SHOP</Nav.Link>
          <Nav.Link className="menu" href="#">CORPORATE GIFTING</Nav.Link>
          <Nav.Link className="menu" href="#">VISIT</Nav.Link>
          <Nav.Link className="menu" href="#">OHANA RUM CLUB</Nav.Link>
          <Nav.Link className="menu" href="#">WHERE TO BUY</Nav.Link>
          <Nav.Link className="menu" href="#">RECIPES</Nav.Link>
          <Nav.Link className="menu" href="#">
            <Cart2 />
            {' '}
            0
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default OurJourneyNav;
