import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddToCartButton from './components/AddToCartButton';
import { useParams } from 'react-router-dom';
import './ItemDetails.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ItemDetails = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const [selectedPhoto, setSelectedPhoto] = useState('');
  const [cartItems, setCartItems] = useState([]);


  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/items/${id}`);
        setItem(response.data);
      } catch (error) {
        console.error('Error fetching item:', error);
      }
    };

    fetchItem();
  }, [id]);

  const handlePhotoClick = (photoURL) => {
    setSelectedPhoto(photoURL);
  };

  if (!item) {
    return <div>Loading...</div>;
  }

  const handleAddToCart = async () => {
    try {
      const existingCartItem = cartItems.find((cartItem) => cartItem.itemId === item.id);
  
      if (existingCartItem) {
        const updatedQuantity = existingCartItem.quantity + 1;
        const itemPrice = parseFloat(item.price) || 0; 
        const updatedTotalPrice = itemPrice * updatedQuantity;
  
        const updatedCartItem = {
          ...existingCartItem,
          quantity: updatedQuantity,
          totalPrice: updatedTotalPrice.toFixed(2), 
        };

        await axios.put(`http://localhost:3001/cart/${existingCartItem.id}`, updatedCartItem);
  
        setCartItems((prevCartItems) =>
          prevCartItems.map((cartItem) => (cartItem.itemId === item.id ? updatedCartItem : cartItem))
        );
      } else {
        const itemPrice = parseFloat(item.price) || 0; 
        const newCartItem = {
          itemId: item.id,
          itemName: item.name,
          itemPrice: itemPrice.toFixed(2),
          itemPhoto: item.photoURL,
          quantity: 1,
          totalPrice: itemPrice.toFixed(2),
        };

        const response = await axios.post('http://localhost:3001/cart', newCartItem);

        setCartItems((prevCartItems) => [...prevCartItems, response.data]);
      }
  
      console.log('Item added to cart successfully!');
      toast.success('Item added to cart successfully! You can view your cart by clicking on the cart icon on the top right corner');
    } catch (error) {
      console.error('Error adding item to cart:', error);
      toast.error('Error adding item to cart. Please try again.');
    }
  };

  return (
    <div className="item-details-page">
      <div className='container item-details-body'>
        <div className="row banner">
          <img className='game-banner' src="/game-banner.jpg" alt="Banner" />
        </div>

        <div className="row item-details">
          <div className='col-8 item-details-left'>
            <div className='row main-photo'>
              <img src={`/${selectedPhoto || item.photoURL}`} alt="Item" />
            </div>
            
          </div>

          <div className='col-4 item-details-right'>
            <h2>{item.name}</h2>
            <h5>{item.feature}</h5>
            <p>{item.line}</p>
            <p>{item.description}</p>
            <span>${item.price}</span>
            
            <AddToCartButton onClick={handleAddToCart} />
          </div>
        </div>

        <div className='row other-photos'>
          <div className='container col-8'>
            <div className='row'>
              <div className='col-md-2 col-4'>
                <img src={`/${item.photoURL}`} alt="Item Photo" onClick={() => handlePhotoClick(item.photoURL)} />
              </div>
              <div className='col-md-2 col-4'>
                <img src={`/${item.photoURL1}`} alt="Item Photo" onClick={() => handlePhotoClick(item.photoURL1)} />
              </div>
              <div className='col-md-2 col-4'>
                <img src={`/${item.photoURL2}`} alt="Item Photo" onClick={() => handlePhotoClick(item.photoURL2)} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default ItemDetails;
