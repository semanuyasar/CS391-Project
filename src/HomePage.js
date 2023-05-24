import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import AddToCartButton from './components/AddToCartButton';

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
              <Button as={Link} to="/categories" variant="dark">
                Shop Now
              </Button>
            </div>
          </div>
        </Col>

      <Row className="mt-4">
        {renderProductCard(1, 'iPad', '$9.99', 'ipad.jpg')}
        {renderProductCard(2, 'Macbook', '$14.99', 'macbook.jpg')}
        {renderProductCard(3, 'iPhone', '$19.99', 'iphone13.jpg')}
        {renderProductCard(4, 'Apple Watch', '$24.99', 'watch.jpg')}
        {renderProductCard(5, 'Airtag', '$29.99', 'airtag.jpg')}
        {renderProductCard(6, 'Airpods', '$34.99', 'airpods2.jpg')}
      </Row>
    </Container>
  );
};

const renderProductCard = (id, name, price, imagePath) => {
  const handleAddToCart = () => {
    // Logic for adding the product to the cart
    console.log(`Product ${id} added to cart`);
  };

  return (
    <Col md={4} className="mb-4">
      <Card>
      <Card.Img variant="top" src={imagePath} alt={name} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{price}</Card.Text>
          <AddToCartButton onClick={handleAddToCart} />
        </Card.Body>
      </Card>
    </Col>
  );
};

export default HomePage;
