import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Cart.css';
import ContinueToPaymentButton from './components/ContinueToPaymentButton';
import { Link } from 'react-router-dom';
import CheckOutPage from './CheckOutPage';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [showCheckout, setShowCheckout] = useState(false);

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
    const subtotal = cartItems.reduce((acc, item) => {
      const totalPrice = parseFloat(item.totalPrice) || 0;
      return acc + totalPrice;
    }, 0);
    setSubtotal(subtotal.toFixed(2));
  };

  const handleContinueToPayment = () => {
    setShowCheckout(true);
  };

  return (
    <div className='container cart-body'>
      <div className='row banner'>
        <img src="./cart-banner.jpg" alt="cart-banner"></img>
      </div>
      <h1>Your Cart</h1>

      {cartItems.length === 0 ? (
        <div className='row cart-empty'>
          <h2>Your cart is empty.</h2>
        </div>
      ) : (
        <div className='container'>
          <div className='row'>
            <div className='col-md-7 col-lg-7'>
              <div className='cart-details-left'>
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
                          <div className='col-4 col-md-3'>
                            <img src={item.itemPhoto} alt='Item' style={{ width: '100%', height: 'auto' }} />
                          </div>
                          <div className='col-8 col-md-9'>
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
            </div>

            <div className='col-md-5 col-sm-12 col-lg-5'>
              <div className='cart-details-right'>
                <h4>Order Summary</h4>
                <h5>Total: {cartItems.length} items</h5>
                <h5>Subtotal: ${subtotal}</h5>
                <Link to='/checkout'>
                  <ContinueToPaymentButton handleContinueToPayment={handleContinueToPayment} />
                </Link>
              </div>
            </div>
          </div>
        </div>

      )}
    </div>
  );
};

export default CartPage;