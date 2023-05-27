import React from 'react';
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