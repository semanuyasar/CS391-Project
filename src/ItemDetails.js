import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AddToCartButton from './components/AddToCartButton';

const ItemDetails = ({ match }) => {
  const [item, setItem] = useState({});

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/items/${match.params.id}`);
        setItem(response.data);
      } catch (error) {
        console.error('Error fetching item:', error);
      }
    };

    fetchItem();
  }, [match.params.id]);

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <div className='container item-details-body'>
      <div className="row banner">
          <img src="banner.jpg" alt="Item" />
      </div>

    <div className="row item-details">
      <div className='col item-details-left'>
        <img src={item.photoURL} alt="Item" />
      </div>
      <div className='col item-details-right'>
        <h2>{item.name}</h2>
        <h4>{item.feature}</h4>
        <p>{item.line}</p>
        <span>{item.price}</span>
        <p>{item.description}</p>
        <p>Item Price</p>
        <AddToCartButton />
      </div>
    </div>
    </div>
  );
};

export default ItemDetails;
