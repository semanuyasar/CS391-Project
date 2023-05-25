import React from 'react';
import './Cart.css';

const Cart = () => {
  return (

    <div className="cart-page">
      <div className='container cart-body'>
        <div className="row banner">
          <img src="cart-banner.jpg" alt="Item" />
        </div>

        <div className="row cart-details">
        <div className='col-7 cart-details-left'>
            <h3>Cart Items</h3>
          </div>
          <div className='col-3 cart-details-right'>
            <h3>Order Summary</h3>
            {/* Include order summary details here */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart;