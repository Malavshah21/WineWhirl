/*import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const CartPage = ({ cart, removeFromCart: removeFromCartFunction, handleEditCart, handleUpdateCart, editingCartItem }) => {
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);
  const navigate = useNavigate();

  const handleShowCheckoutForm = () => {
    setShowCheckoutForm(true);
  };

  const handleCloseCheckoutForm = () => {
    setShowCheckoutForm(false);
    navigate('/cart');
  };

  const handleAddToCart = (item) => {
    const existingItemIndex = cart.findIndex((cartItem) => cartItem.name === item.name);

    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += 1;
      handleUpdateCart(updatedCart[existingItemIndex].id, updatedCart[existingItemIndex].quantity);
    } else {
      handleUpdateCart(item, 1);
    }
  };

  const removeFromCart = (itemName) => {
    const updatedCart = cart.filter(item => item.name !== itemName);
    // Update state or perform necessary operations with updatedCart
  };

  return (
    <div className="product-container">
      <h2>Shopping Cart</h2>
      <br></br>
      {cart.length === 0 ? (
        <p>Your shopping cart is empty.</p>
      ) : (
        <div className="products">
          {cart.map((item) => (
            <div key={item.id} className="product">
              <img
                src={process.env.PUBLIC_URL + `/${item.image}`}
                alt={item.name}
                className="product-image"
              />
              <div className="product-details">
                <p className="product-name">{item.name}</p>
                <p className="product-type">Quantity: 
                  {editingCartItem === item ? (
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) => handleUpdateCart(item.id, e.target.value)}
                    />
                  ) : (
                    item.quantity
                  )}
                </p>
                <div className="product-actions">
                  {editingCartItem === item ? (
                    <button onClick={() => handleUpdateCart(item.id, item.quantity)}>
                      Done
                    </button>
                  ) : (
                    <>
                      <button onClick={() => handleEditCart(item)}>Edit Quantity</button>
                      <button onClick={() => removeFromCart(item.name)}>Remove</button>
                    </>
                  )}
                </div>
                <p className="product-price">${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            </div>
          ))}
          <Link to="/checkout">
            <button onClick={handleShowCheckoutForm}>Proceed to Checkout</button>
          </Link>
        </div>
      )}
      {showCheckoutForm && (
        <CheckoutForm
          onCheckout={(customerDetails) => {
            console.log('Customer Details:', customerDetails);
            window.alert('Order placed!');
            handleCloseCheckoutForm();
          }}
          onCancel={handleCloseCheckoutForm}
        />
      )}
    </div>
  );
};

export default CartPage;*/

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const CartPage = ({ cart, removeFromCart, handleEditCart, handleUpdateCart, editingCartItem }) => {
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);
  const navigate = useNavigate();

  const handleShowCheckoutForm = () => {
    setShowCheckoutForm(true);
  };

  const handleCloseCheckoutForm = () => {
    setShowCheckoutForm(false);
    navigate('/cart');
  };
  
  return (
    <div className="product-container">
      <h2>Shopping Cart</h2>
      <br></br>
      {cart.length === 0 ? (
        <p>Your shopping cart is empty.</p>
      ) : (
        <div className="products">
          {cart.map((item) => (
            <div key={item.name} className="product">
              <img
                src={process.env.PUBLIC_URL + `/${item.image}`}
                alt={item.name}
                className="product-image"
              />
              <div className="product-details">
                <p className="product-name">{item.name}</p>
                <p className="product-type">Quantity: 
                  {editingCartItem === item ? (
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) => handleUpdateCart(item.name, e.target.value)}
                    />
                  ) : (
                    item.quantity
                  )}
                </p>
                <div className="product-actions">
                  {editingCartItem === item ? (
                    <button onClick={() => handleUpdateCart(item.name, item.quantity)}>
                      Done
                    </button>
                  ) : (
                    <>
                      <button onClick={() => handleEditCart(item)}>Edit Quantity</button>
                      <button onClick={() => removeFromCart(item.name)}>Remove</button>
                    </>
                  )}
                </div>
                <p className="product-price">${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            </div>
          ))}
          <Link to="/checkout">
            <button>Proceed to Checkout</button>
          </Link>
        </div>
      )}
      {showCheckoutForm && (
        <CheckoutForm
          onCheckout={(customerDetails) => {
            console.log('Customer Details:', customerDetails);
            window.alert('Order placed!');
            handleCloseCheckoutForm();
          }}
          onCancel={handleCloseCheckoutForm}
        />
      )}
    </div>
  );
};

export default CartPage;
