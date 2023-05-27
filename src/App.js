import React from 'react';
<<<<<<< HEAD
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
=======
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './HomePage';
import Cart from './Cart';
import ItemDetails from './ItemDetails';
import CheckOutPage from './CheckOutPage';

function App() {
  return (
    <Router>
      <>
        <div className="main-page">
          <Navbar />
          <div className="container main-body">
            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route path="/cart" element={<Cart/>} />
              <Route path="/items/:id" element={<ItemDetails />} />
              <Route path="/checkout" element={<CheckOutPage />} />
            </Routes>
          </div>
          <Footer/>
        </div>
      </>
    </Router>
  );
}

export default App;
>>>>>>> semanur
