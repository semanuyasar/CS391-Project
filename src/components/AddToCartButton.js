import React from 'react';
<<<<<<< HEAD

function AddToCartButton() {
    return (
      <button type="button" className="btn btn-success">
        Add to Cart
      </button>
    );
  }
  
  export default AddToCartButton;
=======
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
>>>>>>> semanur
