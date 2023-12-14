/*import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Import your CSS file

const isLoggedIn = false;

const Header = () => {
  return (
    <header className="navbar">
      <div className="container">
        <div className="logo-container">
          <img src="/group_logo.jpg" alt="logo" className="glogo" />
        </div>
        <div className="navbar-nav">
          <ul>
            <li>
              <Link className="nav-link" to="/home">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="dropdown">
              <label className="nav-link">Products
                <input type="checkbox" className="toggle" />
                <div className="dropdown-content">
                  <Link to="/all-products">All Products</Link>
                  <Link to="/red-wine">Red Wine</Link>
                  <Link to="/white-wine">White Wine</Link>
                  <Link to="/rose">Rosé</Link>
                  <Link to="/non-alcoholic">Non-Alcoholic</Link>
                </div>
              </label>
            </li>
            <li>
              <Link className="nav-link" to="/cart">
                Cart
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
            {isLoggedIn ? (
              <>
                <li>
                  <Link className="nav-link" to="/logout">
                    Logout
                  </Link>
                </li>
              </>
            ) : (
              <li>
                <Link className="nav-link" to="/">
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;*/

import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Import your CSS file

const isLoggedIn = false;

const Header = () => {
  return (
    <header className="navbar">
      <div className="container">
        <div className="logo-container">
          <img src="/group_logo.jpg" alt="logo" className="glogo" />
        </div>
        <div className="navbar-nav">
          <ul>
            <li>
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="dropdown">
              <label className="nav-link">Products
                <input type="checkbox" className="toggle" />
                <div className="dropdown-content">
                  <Link to="/all-products">All Products</Link>
                  <Link to="/red-wine">Red Wine</Link>
                  <Link to="/white-wine">White Wine</Link>
                  <Link to="/rose">Rosé</Link>
                  <Link to="/non-alcoholic">Non-Alcoholic</Link>
                </div>
              </label>
            </li>
            <li>
              <Link className="nav-link" to="/cart">
                Cart
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
            {isLoggedIn ? (
              <>
                <li>
                  <Link className="nav-link" to="/logout">
                    Logout
                  </Link>
                </li>
              </>
            ) : (
              <li>
               
                <Link className="nav-link" to="/profile">Profile</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
