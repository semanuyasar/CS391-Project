import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './HomePage';
import Cart from './Cart';
import ItemDetails from './ItemDetails';

function App() {
  return (
    <Router>
      <>
        <div className="main-page">
          <Navbar />
          <div className="container main-body">
            
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/cart" element={<Cart/>} />
              <Route exact path="/items/:id" component={ItemDetails} />
            </Routes>
          </div>
        </div>
      </>
    </Router>
  );
}

export default App;