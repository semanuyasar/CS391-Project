import React from 'react';
import { Col,Card } from 'react-bootstrap';
import AddToCartButton from './components/AddToCartButton';
import {Link} from 'react-router-dom'

const handleAddToCart = () => {
    // Logic for adding the product to the cart
    console.log(`Product ${item.id} added to cart`);
    //history.push(`/items/${id}`);
};

const ItemCard = ({ id,item }) => {

  return (
    
    <Col md={3} sm={6} className="mb-4">
    <Card className="h-100 d-flex flex-column">
      <Card.Img variant="top" src={item.photoURL} alt={item.name} />
      <Card.Body className="d-flex flex-column">
        <div className="flex-grow-1">
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>{item.feature}</Card.Text>
          <Card.Text>{item.line}</Card.Text>
          <Card.Text>{item.price}</Card.Text>
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

export default ItemCard;

