import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CheckoutPage.css';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';

class CheckOutPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            phoneNumber: '',
            email: '',
            address: '',
            cartNumber: ''
        };
    }

    handleInputChange = (event) => {
        const { name, value, type, checked } = event.target;
        const inputValue = type === 'checkbox' ? checked : value;
        this.setState({ [name]: inputValue });
    };

    handleSubmit = async (event) => {
        event.preventDefault();

        const { name, surname, phoneNumber, email, address, cartNumber, giftPackaging } = this.state;
        const { subtotal } = this.props;

        const formData = {
            name,
            surname,
            phoneNumber,
            email,
            address,
            cartNumber,
            giftPackaging,
            subtotal,
        };

        try {
            const response = await axios.post('http://localhost:3001/orders', formData);
            console.log('Form data saved:', response.data);
            this.setState({
              name: '',
              surname: '',
              phoneNumber: '',
              email: '',
              address: '',
              cartNumber: '',
              giftPackaging: false,
            });
            toast.success('Order submitted successfully! Redirecting you to the home page...');
          } catch (error) {
            console.error('Error saving form data:', error);
            toast.error('Error submitting order!');
          }
          
    };


    render() {
        const { giftPackaging, name, surname, phoneNumber, email, address, cartNumber } = this.state;
        const { subtotal } = this.props;

        return (
            <div className="container checkout-body">
                <h1>Checkout Page</h1>
                <div className="row checkout-details">
                    <div className="col checkout-form-container">
                        <form className="checkout-form" onSubmit={this.handleSubmit}>


                            <div className="form-group">
                                <label htmlFor="name">Name:</label>
                                <input type="text" id="name" name="name" value={name} onChange={this.handleInputChange} required minLength={3} placeholder='John' />
                            </div>

                            <div className="form-group">
                                <label htmlFor="name">Surname:</label>
                                <input type="text" id="surname" name="surname" value={surname} onChange={this.handleInputChange} required minLength={2} placeholder='Smith' />
                            </div>

                            <div className="form-group">
                                <label htmlFor="phoneNumber">Phone Number:</label>
                                <input type="text" id="phoneNumber" name="phoneNumber" value={phoneNumber} onChange={this.handleInputChange} required placeholder='053XXXXXXXX' />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email:</label>
                                <input type="email" id="email" name="email" value={email} onChange={this.handleInputChange} required placeholder='john.smith@ozu.edu.tr' />
                            </div>

                            <div className="form-group">
                                <label htmlFor="address">Address:</label>
                                <input type="text" id="address" name="address" value={address} onChange={this.handleInputChange} required maxLength={255} placeholder='Orman sk. No:13 Istanbul' />
                            </div>

                            <div className="form-group">
                                <label htmlFor="cartNumber">Cart Number:</label>
                                <input type="text" id="cartNumber" name="cartNumber" value={cartNumber} onChange={this.handleInputChange} required maxLength={16} placeholder='12345678XXXXXXXX' />
                            </div>
                            <div className="form-group">
                                <label htmlFor="giftPackaging">Do you want a gift packaging?</label>
                                <input
                                    type="checkbox"
                                    id="giftPackaging"
                                    name="giftPackaging"
                                    checked={giftPackaging}
                                    onChange={this.handleInputChange}
                                />
                            </div>

                            <button type="submit" className="submit-button">
                                Submit
                            </button>
                        </form>
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
    }
}

export default CheckOutPage;
