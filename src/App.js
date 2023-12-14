import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Redirect } from 'react-router-dom';
import Header from './components/common/Header';
//import Footer from './components/common/Footer';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import CheckoutForm from './pages/CheckoutForm';
import LoginPage from './pages/LoginPage'; 
import LogoutPage from './pages/LogoutPage'; 
import RegisterPage from './pages/RegisterPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import RedWinePage from './pages/RedWine';
import RoseWinePage from './pages/RoseWine';
import WhiteWinePage from './pages/WhiteWine';
import NormalWinePage from './pages/NormalWine';
import Profile from './pages/Profile';
import './App.css';

const initialWineData = [
  /*red*/
  { name: 'Shiraz Cabernet : Jacobs Creek', type: 'Red', price: 20.99 , image:'jacobsshiraz.jpg'},
  { name: 'Open Dark red', type: 'Red', price: 14.95 , image:'darkred.jpg'},
  { name: '19 Crimes Snoop Cali', type: 'Red', price: 17.95 , image:'19crimessnoop.jpg'},
  { name: 'Open Cab2 Merlot  ', type: 'Red', price: 12.90 , image:'cab2.jpg'},
  { name: 'Open Smooth red', type: 'Red', price: 13.95, image:'opensmoothred.jpg' },
  { name: '19 Crimes', type: 'Red', price: 14.95, image:'19crimesred.jpg' },
  { name: '1924 Limited Edition BourbonBarrel Aged Cabernet Sauvignon', type: 'Red', price: 14.95, image:'1924.jpg' },
  { name: 'The Prisoner Red Blend', type: 'Red', price: 57.95, image:'prisoner.jpg' },
  { name: 'Silk & Spice Red', type: 'Red', price: 16.00, image:'silk.jpg' },
  { name: 'McManis Cabernet Sauvignon', type: 'Red', price: 21.95, image:'mcmanis.jpg' },
  { name: 'Caymus Zinfandel 2020', type: 'Red', price: 59.95, image:'caymus.jpg' },
  { name: 'Frontera After Midnight Dark Red Blend', type: 'Red', price: 9.95, image:'frontera.jpg' },
  { name: 'Meiomi Pinot Noir', type: 'Red', price: 23.95, image:'noir.jpg' },
  /*rose*/
  { name: 'Gérard Bertrand Côte des Roses Rosé', type: 'Rosé', price: 17.95, image:'cote.jpg' },
  { name: 'Kim Crawford Rosé', type: 'Rosé', price: 20.95, image:'kim.jpg' },
  { name: 'Argento Rosé', type: 'Rosé', price: 11.60, image:'argento.jpg' },
  { name: 'Jacobs Creek Moscato Rosé', type: 'Rosé', price: 15.95, image:'moscato.jpg' },
  { name: 'Freixenet Rose IGT', type: 'Rosé', price: 14.20, image:'igt.jpg' },
  { name: 'Marynissen Heritage Collection Pinot Noir Rosé 2021', type: 'Rosé', price: 24.95, image:'2021.jpg' },
  { name: 'Kechris Roza Retsina Wine', type: 'Rosé', price: 30.95, image:'roza.jpg' },
  /*white*/
  { name: 'Kim Crawford Sauvignon Blanc', type: 'White', price: 18.95, image:'blanc.jpg' },
  { name: 'Santa Margherita Pinot Grigio', type: 'White', price: 22.95, image:'santa.jpg' },
  { name: 'Oyster Bay Sauvignon Blanc', type: 'White', price: 18.95, image:'bay.jpg' },
  { name: 'Whitehaven Sauvignon Blanc', type: 'White', price: 18.95, image:'sau.jpg' },
  { name: 'Cavit Collection Pinot Grigio delle Venezie IGT', type: 'White', price: 12.95, image:'cavit.jpg' },
  { name: 'Josh Cellars Pinot Grigio', type: 'White', price: 17.95, image:'josh.jpg' },
  { name: 'Jacobs Creek Moscato', type: 'White', price: 13.95, image:'white.jpg' },
  { name: 'Jackson-Triggs Reserve Sauvignon Blanc VQA', type: 'White', price: 14.95, image:'triggs.jpg' },
  { name: 'Woodbridge By Robert Mondavi Pinot Grigio', type: 'White', price: 12.95, image:'wood.jpg' },
  /*non-alcoholic*/
  { name: 'Bottega 0 Rose Non-Alcoholic Wine', type: 'Non-Alcoholic', price: 11.95, image:'bottega.jpg' },
  { name: 'Nozeco - De-Alcoholized', type: 'Non-Alcoholic', price: 12.95, image:'nozeco.jpg' },
  { name: 'Luna De Murviedro Sparkling Rose De-Alchololized', type: 'Non-Alcoholic', price: 9.95, image:'luna.jpg' },
  { name: 'Tarapacá De-Alcoholized Sauvignon Blanc', type: 'Non-Alcoholic', price: 10.95, image:'tarapacka.jpg' },
  { name: 'Martini Dolce 0.0 - De-Alcoholized', type: 'Non-Alcoholic', price: 13.95, image:'martini.jpg' },
];

const App = () => {
  const [wineData, setWineData] = useState(initialWineData);
  const [cart, setCart] = useState([]);
  const [editingCartItem, setEditingCartItem] = useState(null);
  const [showTable, setShowTable] = useState(false); 

  const handleExploreClick = () => {
    setShowTable(true);
  };


const addToCart = (wine) => {
  const existingItem = cart.find((item) => item.name === wine.name);

  if (existingItem) {
    const updatedCart = cart.map((item) =>
      item.name === wine.name ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
  } else {
    const newItem = { ...wine, quantity: 1 };
    setCart([...cart, newItem]);
  }
};

  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.name !== id);
    setCart(updatedCart);
  };

  const handleEditCart = (item) => {
    setEditingCartItem(item);
  };

  const handleUpdateCart = (id, newQuantity) => {
    const updatedCart = cart.map((item) =>
      item.name === id ? { ...item, quantity: newQuantity } : item
    );
    setCart(updatedCart);
    setEditingCartItem(null);
  };

  const clearCart = () => {
    setCart([]); // Set the cart to an empty array to clear it
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
        <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<Home />}/>
          <Route path="/all-products" element={<ProductPage wineData={wineData} addToCart={addToCart} />} />
          <Route path="/red-wine" element={<RedWinePage wineData={wineData.filter(wine => wine.type === 'Red')} addToCart={addToCart} />} />
          <Route path="/white-wine" element={<WhiteWinePage wineData={wineData.filter(wine => wine.type === 'White')} addToCart={addToCart} />} />
          <Route path="/rose" element={<RoseWinePage wineData={wineData.filter(wine => wine.type === 'Rosé')} addToCart={addToCart} />} />
          <Route path="/non-alcoholic" element={<NormalWinePage wineData={wineData.filter(wine => wine.type === 'Non-Alcoholic')} addToCart={addToCart} />} />
          <Route path="/cart" element={<CartPage cart={cart} removeFromCart={removeFromCart} 
          handleEditCart={handleEditCart} handleUpdateCart={handleUpdateCart} editingCartItem={editingCartItem} />} />
         
          <Route
            path="/checkout"
            element={<CheckoutForm
              onCheckout={(customerDetails) => {
                console.log('Customer Details:', customerDetails);
                // Perform checkout logic, update state, etc.
                 // Clear the cart after the order is placed
                 clearCart();
              }}
              onCancel={() => {
                // Handle cancel checkout logic
              }}
          />}
          />
         <Route path="/about" element={<AboutPage />} />
          <Route path="/logout" element={<LogoutPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
       {/*} <Footer />*/}
      </div>
    </Router>
  );
};

export default App;