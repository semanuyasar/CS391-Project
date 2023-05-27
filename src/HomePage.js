import React, { useState } from 'react';
import './HomePage.css';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import AddToCartButton from './components/AddToCartButton';
import { Link, useNavigate } from 'react-router-dom';


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
        {renderProductCard(1, 'iPad 9th generation', '64 GB', 'All the essentials in the most affordable iPad.', '$329.99', 'ipad.jpg')}
        {renderProductCard(2, 'Macbook Air', 'M1 chip', 'Power. It’s in the Air.', '$999.99', 'macbook.jpg')}
        {renderProductCard(3, 'iPhone 13', '256 GB', 'Love the power. Love the price.', '$699.99', 'iphone13.jpg')}
        {renderProductCard(4, 'Apple Watch SE', '', 'It’s the ultimate device for a healthy life.', '$249.99', 'watch.jpg')}
        {renderProductCard(5, 'AirTag', '', 'Lose your knack for losing things.', '$29.99', 'airtag.jpg')}
        {renderProductCard(6, 'Airpods 2nd generation', '', 'Wireless. Effortless. Magical.', '$129.99', 'airpods2.jpg')}
      </Row>
    </Container>
  );
};

const renderProductCard = (id, name, feature, line, price, imagePath) => {
  const handleAddToCart = () => {
    // Logic for adding the product to the cart
    console.log(`Product ${id} added to cart`);
    //history.push(`/items/${id}`);
  };

  return (
    <Col md={3} sm={6} className="mb-4">
      <Card className="h-100 d-flex flex-column">
        <Card.Img variant="top" src={imagePath} alt={name} />
        <Card.Body className="d-flex flex-column">
          <div className="flex-grow-1">
            <Card.Title>{name}</Card.Title>
            <Card.Text>{feature}</Card.Text>
            <Card.Text>{line}</Card.Text>
            <Card.Text>{price}</Card.Text>
            <Card.Link as={Link} to={`/items/${id}`} className="mr-2">Learn More</Card.Link>
          </div>
          <div className="mt-auto">
            <AddToCartButton onClick={handleAddToCart} />
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default HomePage;