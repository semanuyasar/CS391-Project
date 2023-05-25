import React from 'react';
import { Button } from 'react-bootstrap';

const AddToCartButton = ({ onClick }) => {
  return (
    <div className="d-flex justify-content-center">
      <Button variant="dark" onClick={onClick}>
       Add to Cart
      </Button>
    </div>
  );
};

export default AddToCartButton;
