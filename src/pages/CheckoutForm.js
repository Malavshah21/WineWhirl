/*
import React, { useState } from 'react';
import PropTypes from 'prop-types'; // Import prop-types module
//import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



const CheckoutForm = ({ onCheckout, onCancel}) => {
  const [customerDetails, setCustomerDetails] = useState({
    name: '',
    cardNumber: '',
    expirationDate: '',
    cvc: '',
  });


const navigate = useNavigate();

const handleInputChange = (e) => {
  const { name, value } = e.target;
  setCustomerDetails((prevDetails) => ({
    ...prevDetails,
    [name]: value,
  }));
};

  const handleCheckout = () => {
        // Check if the card number matches the placeholder format
        const cardNumberInput = document.querySelector('input[data-mask="0000 0000 0000 0000"]');
        const cardNumberValue = cardNumberInput ? cardNumberInput.value : '';
    
        if (!/^(\d\s?){16}$/.test(cardNumberValue.replace(/\s/g, ''))) {
          window.alert('Invalid card number format. Please enter a valid card number.');
          return;
        }
    
        // Check if all fields are filled
        if (!customerDetails.name || !customerDetails.cardNumber || !customerDetails.expirationDate || !customerDetails.cvc) {
          window.alert('Please fill in all required fields.');
          return;
        }

    // Proceed with the checkout if all checks pass
    onCheckout(customerDetails);
    // Display a window alert
    window.alert('Order placed!');

     // Reset the customer details
     setCustomerDetails({
      name: '',
      cardNumber: '',
      expirationDate: '',
      cvc: '',
    });

    //setShowCheckoutForm(false);
    navigate('/');

  };

  const handleCancelCheckout = () => {
    console.log('Checkout canceled');
    // Close the checkout form
    //setShowCheckoutForm(false);
    // Optionally, reset the customer details
    setCustomerDetails({
      name: '',
      cardNumber: '',
      expirationDate: '',
      cvc: '',
    });
    // Call the onCancel function passed as a prop
    //onCancel();
    navigate('/cart');
  };

  return (
    <div>
      <center>
        <h2>Checkout</h2>
      </center>
      <form>
      <div class="wrapper">
          <div class="title">Checkout</div>
          <div class="checkout_form">
            <div class="input_item">
              <input type="text" placeholder="Card Holder Name" name="name" value={customerDetails.name} onChange={handleInputChange} />
            </div>
            <div class="input_item">
              <input type="text" placeholder="0000 0000 0000 0000"  name="cardNumber" value={customerDetails.cardNumber} onChange={handleInputChange} />
            </div>
            <div class="input_grp">
              <div class="input_item">
                <input type="text" placeholder="MM / YY" name="expirationDate" value={customerDetails.expirationDate} onChange={handleInputChange} />
              </div>
              <div class="input_item">
                <input type="text" placeholder="C V C" name="cvc" value={customerDetails.cvc} onChange={handleInputChange} />
              </div>
            </div>
            <div className="checkout">
            <button type="button" onClick={handleCheckout}>
              Checkout
            </button>
            <button type="button" onClick={handleCancelCheckout}>
              Cancel
            </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;

*/

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const CheckoutForm = ({ onCheckout, cart }) => {
  const [cardDetails, setCardDetails] = useState({
    name: '',
    cardNumber: '',
    expDate: '',
    cvc: '',
    address:'',
    city:'',
    postal:''
  });

  const [isValidName, setIsValidName] = useState(false);
  const [isValidCardNumber, setIsValidCardNumber] = useState(false);
  const [isValidExpDate, setIsValidExpDate] = useState(false);
  const [isValidCvc, setIsValidCvc] = useState(false);
  const [isValidAddress, setIsValidAddress] = useState(false);
  const [isValidCity, setIsValidCity] = useState(false);
  const [isValidPostal, setIsValidPostal] = useState(false);


  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    let formattedValue = value;

    // Format card number as '0000 0000 0000 0000'
    if (name === 'cardNumber') {
      formattedValue = value.replace(/\D/g, ''); // Remove non-numeric characters
      formattedValue = formattedValue.slice(0, 16); // Limit to the first 16 characters
      formattedValue = formattedValue.match(/.{1,4}/g)?.join(' ') || ''; // Add space every 4 digits
      setIsValidCardNumber(formattedValue.replace(/\D/g, '').length === 16);
    }

    // Format exp date as 'MM / YY' and validate for a valid date (1-31)
    if (name === 'expDate') {
      formattedValue = value.replace(/\D/g, ''); // Remove non-numeric characters
      formattedValue = formattedValue.match(/.{1,2}/g)?.join(' / ') || ''; // Add space after 2 digits
      const isValidDate = /^\d{1,2} \/ \d{1,2}$/.test(formattedValue);
      const day = parseInt(formattedValue.split('/')[0], 10);
      setIsValidExpDate(isValidDate && day >= 1 && day <= 31);
    }

    // Format cvc as 'CVC'
    if (name === 'cvc') {
      formattedValue = value.replace(/\D/g, ''); // Remove non-numeric characters
      setIsValidCvc(formattedValue.replace(/\D/g, '').length === 3);
    }

     // Validate name is not empty
     if (name === 'name') {
      setIsValidName(value.trim() !== '');
    }

    if (name === 'postal') {
      formattedValue = value.toUpperCase(); // Convert to uppercase
      const isValidPostal = /^[A-Z]\d[A-Z] \d[A-Z]\d$/i.test(formattedValue);
      setIsValidPostal(isValidPostal);
    }

    setCardDetails((prevDetails) => ({
      ...prevDetails,
      [name]: formattedValue,
    }));
  };

  const handleCheckout = () => {
    // Perform validation or other logic if needed

   // Example: Check if card number, exp date, and CVC are valid
   if (!isValidCardNumber) {
    window.alert('Please enter a valid card number with 16 digits.');
    return;
  }

  if (!isValidExpDate) {
    window.alert('Please enter a valid expiration date in MM / YY format.');
    return;
  }

  if (!isValidCvc) {
    window.alert('Please enter a valid CVC with 3 digits.');
    return;
  }
    // Example: Check if all required fields are valid
    if (!isValidName || !isValidCardNumber || !isValidExpDate || !isValidCvc || isValidAddress || isValidCity || isValidPostal) {
      window.alert('Please fill out all required details.');
      return;
    }

    // Call the onCheckout function with card details
    onCheckout(cardDetails);

    // Display a window alert
    window.alert('Order placed!');

    // Navigate to the home page after checkout
    navigate('/home');
  };

  const handleCancelCheckout = () => {

    // Optionally, reset the customer details
    setCardDetails({
      name: '',
      cardNumber: '',
      expDate: '',
      cvc: '',
      address:'',
      city:'',
      postal:''
    });
    // Navigate to the home page after cancel
    navigate('/cart');
  };
  
  return (
    <div>
      <h2>Checkout</h2>
      {/* Checkout Form */}
      <form>
        <div className="wrapper">
          <div className="title">Checkout</div>
          <div className="checkout_form">
            <div className="input_item">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={cardDetails.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="input_item">
              <input
                type="text"
                name="cardNumber"
                placeholder="Card Number"
                value={cardDetails.cardNumber}
                onChange={handleInputChange}
              />
            </div>
            <div className="input_item">
              <input
                type="text"
                name="expDate"
                placeholder="MM / YY"
                value={cardDetails.expDate}
                onChange={handleInputChange}
              />
            </div>
            <div className="input_item">
              <input
                type="text"
                name="cvc"
                placeholder="CVC"
                value={cardDetails.cvc}
                onChange={handleInputChange}
              />
            </div>
            <div className="section">
              <h3>Shipping Address</h3>
              <div className="input_item">
                <input
                  type="text"
                  name="address"
                  placeholder="Address Line 1"
                  value={cardDetails.address}
                  onChange={handleInputChange}
                />
              </div>
              <div className="input_item select-wrapper">
                <select
                  name="city"
                  value={cardDetails.city}
                  onChange={handleInputChange}
                >
                  <option value="" disabled>
                    Select City
                  </option>
                  <option value="Toronto">Toronto</option>
                  <option value="Ottawa">Ottawa</option>
                  <option value="Mississauga">Mississauga</option>
                  <option value="Kitchener">Kitchener</option>
                  <option value="Burlington">Burlington</option>
                  <option value="Oakville">Oakville</option>
                  <option value="Richmond Hill">Richmond Hill</option>
                </select>
              </div>
              <div className="input_item">
                <input
                  type="text"
                  name="postal"
                  placeholder="Postal Code (e.g., M1G 2Y6)"
                  value={cardDetails.postal}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="checkout">
              <button type="button" onClick={handleCheckout}>
                Checkout
              </button>
              <button type="button" onClick={handleCancelCheckout}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
  
export default CheckoutForm;
