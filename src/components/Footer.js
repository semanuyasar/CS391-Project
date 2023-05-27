import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={4}>
            <h5>About Us</h5>
            <p>Discover the best in tech. From smartphones to smart home devices, we offer the latest gadgets and accessories to enhance your digital lifestyle. Enjoy exceptional customer service and competitive prices. Shop now!</p>
          </Col>
          <Col md={4}>
            <h5>Contact Us</h5>
            <p>Email: info@everythinghere.com</p>
            <p>Phone: +1 123-456-7890</p>
          </Col>
          <Col md={4}>
            <h5>Follow Us</h5>
            <div className="social-icons">
              <a href="#fb"><FontAwesomeIcon icon={faFacebook} /></a>
              <a href="#twitter"><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="#instagram"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="#linkedin"><FontAwesomeIcon icon={faLinkedin} /></a>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="footer-bottom">
        <Container>
          <Row>
            <Col md={6} className="text-left">
              &copy; 2023 Your Tech Store. All rights reserved.
            </Col>
            <Col md={6} className="text-right">
              Privacy Policy | Terms of Service
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
