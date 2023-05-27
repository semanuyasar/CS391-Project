import React, { useState, useEffect } from 'react';
import './HomePage.css';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import ItemCard from './ItemCard.js';
import itemsData from './db.json'; // Import the items data


const HomePage = () => {
  return (
    <Container className='text-center'>
      <h1>Welcome to Our Store!</h1>
      <p>Explore our wide range of products.</p>
      <Col>
        <div className="image-container">
          <img
            src="wide_image.jpg"
            alt="Wide Image"
            className="img-fluid"
          />
          <div className="content">
            <Button as={Link} to="/categories" variant="dark" size='lg'>
              Shop Now
            </Button>
          </div>
        </div>
      </Col>

      <Row className="product row mt-4">
         {itemsData.items.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </Row>
    </Container>
  );
};

export default HomePage;
