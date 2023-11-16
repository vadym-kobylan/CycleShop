import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
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
      <p>&copy; 2023 CycleShop.</p>
    </footer>
  );
};

export default Footer;
