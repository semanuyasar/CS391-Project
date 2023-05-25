import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
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
            <p>Email: info@example.com</p>
            <p>Phone: +1 123-456-7890</p>
          </Col>
          <Col md={4}>
            <h5>Follow Us</h5>
            <div className="social-icons">
              <a href="#"><i className="fa fa-facebook"></i></a>
              <a href="#"><i className="fa fa-twitter"></i></a>
              <a href="#"><i className="fa fa-instagram"></i></a>
              <a href="#"><i className="fa fa-linkedin"></i></a>
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
