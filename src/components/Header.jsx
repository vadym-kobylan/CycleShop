import React from 'react';
import { Link } from 'react-router-dom';
import cycleLogo from '../image/logo-1.png';
import CartSvg from './CartSvg';

const Header = () => {
  return (
    <div className="top-bar">
      <Link to="/">
        <img src={cycleLogo} alt="logo" />
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a href="#">Bicycles</a>
          </li>
          <li>
            <a href="#">Accessories</a>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
      <Link className='center-link' to="/cart">
        <CartSvg fill="#fff" className="cart-navigation" />
      </Link>
    </div>
  );
};

export default Header;
