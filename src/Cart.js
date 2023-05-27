import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Cart.css';
import ContinueToPaymentButton from './components/ContinueToPaymentButton';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    fetchCartItems();
  }, []);

  useEffect(() => {
    calculateSubtotal();
  }, [cartItems]);

  const fetchCartItems = async () => {
    try {
      const response = await axios.get('http://localhost:3001/cart');
      setCartItems(response.data);
    } catch (error) {
      console.error('Error fetching cart items:', error);
    }
  };

  const deleteCartItem = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/cart/${id}`);
      setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    } catch (error) {
      console.error('Error deleting cart item:', error);
    }
  };

  const calculateSubtotal = () => {
    const total = cartItems.reduce((acc, item) => {
      const price = parseFloat(item.itemPrice.replace(/[^0-9.-]+/g, ''));
      return acc + price;
    }, 0);
    setSubtotal(total.toFixed(2));
  };

  const savePriceToDatabase = async () => {
    try {
      await axios.post('http://localhost:3001/checkout', { subtotal });
      console.log('Price saved to database:', subtotal);
      // Perform any other necessary actions after saving the price to the database
    } catch (error) {
      console.log('Error saving price to database:', error);
    }
  };

  return (
    <div className='container cart-body'>
      <h1>Your Cart</h1>

      {cartItems.length === 0 ? (
        <div className='row cart-empty'>
          <h2>Your cart is empty.</h2>
        </div>
      ) : (
        <div className='row cart-details'>
          <div className='col-8 cart-details-left'>
            <ul>
              {cartItems.map((item) => (
                <li key={item.id} className='cart-item'>
                  <div className='item-header'>
                    <h4>{item.itemName}</h4>
                    <button className='delete-button' onClick={() => deleteCartItem(item.id)}>
                      <span>&times;</span>
                    </button>
                  </div>
                  <div className='item-details'>
                    <div className='row'>
                      <div className='col'>
                        <img src={item.itemPhoto} alt='Item' style={{ width: '150px', height: '150px' }} />
                      </div>
                      <div className='col'>
                        <div className='item-info'>
                          <h6>Quantity: {item.quantity}</h6>
                          <h6>Price: {item.itemPrice}</h6>
                          <h6>Seller: Everything Here!</h6>
                          <h6>Free shipping, free returns!</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className='col-4 cart-details-right'>
            <h4>Order Summary</h4>
            <h5>Total: {cartItems.length} items</h5>
            <h5>Subtotal: ${subtotal}</h5>
            <Link to='/checkout'>
              <ContinueToPaymentButton onClick={savePriceToDatabase} />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
