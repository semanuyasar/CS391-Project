import React from 'react'
import Navbar from './components/Navbar.js'
import './Cart.css';

const Cart = () => {
  return (

    <div className="cart-page">
      <div className='container cart-body'>
        <div className="row banner">
          <img src="cart-banner.jpg" alt="Item" />
        </div>

        <div className="row cart-details">
        <div className='col cart-details-left'>
            <h1>Cart Items</h1>
          </div>
          <div className='col cart-details-right'>
            <h1>Order Summary</h1>
            {/* Include order summary details here */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart;