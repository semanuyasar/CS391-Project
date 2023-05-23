import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar.js';
import AddToCartButton from './components/AddToCartButton';

function App() {
  return (
    <div className="item-details-page">
      <Navbar />
      <div className='container item-details-body'>
        <div className="row banner">
          <img src="banner.jpg" alt="Item" />
        </div>
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
        <div className="row item-more-photos"></div>
      </div>
    </div>
  );
}

export default App;
