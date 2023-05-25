import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AddToCartButton from './components/AddToCartButton';

const ItemDetails = () => {
    return (
        <div className="row item-details">
            <div className='col item-details-left'>
                <img src="macbook.jpg" alt="Item" />
            </div>
            <div className='col item-details-right'>
                <h2>Item Name</h2>
                <h4>Brand</h4>
                <span>Price</span>
                <p>Item Description</p>
                <p>Item Price</p>
                <AddToCartButton />
            </div>
        </div>
    );
}

export default ItemDetails;
