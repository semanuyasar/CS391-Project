import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddToCartButton from './components/AddToCartButton';
import { useParams } from 'react-router-dom';
import './ItemDetails.css';

const ItemDetails = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const [selectedPhoto, setSelectedPhoto] = useState('');

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

  return (
    <div className='container item-details-body'>
      <div className="row banner">
        <img src="banner.jpg" alt="Item" />
      </div>

      <div className="row item-details">
        <div className='col-8 item-details-left'>
          <div className='row main-photo'>
            <img src={`/${selectedPhoto || item.photoURL}`} alt="Item" />
          </div>
        </div>
        <div className='col-4 item-details-right'>
          <h2>{item.name}</h2>
          <h4>{item.feature}</h4>
          <p>{item.line}</p>
          <span>{item.price}</span>
          <p>{item.description}</p>
          <AddToCartButton />
        </div>
      </div>

      <div className='row other-photos'>
        <div className='col-4'>
          <img src={`/${item.photoURL}`} alt="Item" onClick={() => handlePhotoClick(item.photoURL)} />
        </div>
        <div className='col-4'>
          <img src={`/${item.photoURL1}`} alt="Item" onClick={() => handlePhotoClick(item.photoURL1)} />
        </div>
        <div className='col-4'>
          <img src={`/${item.photoURL2}`} alt="Item" onClick={() => handlePhotoClick(item.photoURL2)} />
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
