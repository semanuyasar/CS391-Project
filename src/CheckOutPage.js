import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CheckoutPage.css';

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
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
        // You can access the form inputs using this.state
        // e.g., this.state.name, this.state.phoneNumber, etc.
        // Perform any necessary validation, processing, or API calls
    }

    render() {
        const { giftPackaging, name, surname, phoneNumber, email, address, cartNumber } = this.state;

        return (
            <div className="container checkout-body">
                <h1>Checkout Page</h1>
                <div className='row checkout-details'>
                    <div className="col checkout-form-container">
                        
                        <form className="checkout-form" onSubmit={this.handleSubmit}>
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

                            <div className="form-group">
                                <label htmlFor="name">Name:</label>
                                <input type="text" id="name" name="name" value={name} onChange={this.handleInputChange} required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="name">Surname:</label>
                                <input type="text" id="surname" name="surname" value={surname} onChange={this.handleInputChange} required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="phoneNumber">Phone Number:</label>
                                <input type="text" id="phoneNumber" name="phoneNumber" value={phoneNumber} onChange={this.handleInputChange} required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email:</label>
                                <input type="email" id="email" name="email" value={email} onChange={this.handleInputChange} required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="address">Address:</label>
                                <input type="text" id="address" name="address" value={address} onChange={this.handleInputChange} required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="cartNumber">Cart Number:</label>
                                <input type="text" id="cartNumber" name="cartNumber" value={cartNumber} onChange={this.handleInputChange} required />
                            </div>

                            <button type="submit" className="submit-button">Submit</button>
                        </form>
                    </div>

                    <div className="col total-summary-container">
                        <h2>Total Summary</h2>
                        {/* Render the summary of products and total price here */}
                    </div>
                </div>
            </div>
        );
    }
}

export default CheckOutPage;