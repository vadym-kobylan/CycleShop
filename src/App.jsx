import React, { useState } from 'react';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Cart from './Pages/Cart/Cart';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';

import bike1 from './image/bike1.jpg';
import bike2 from './image/bike2.jpg';
import bike3 from './image/bike3.jpg';
import bike4 from './image/bike4.jpg';
import accessorie1 from './image/accessorie1.jpg';
import accessorie2 from './image/accessorie2.jpg';
import accessorie3 from './image/accessorie3.jpg';
import accessorie4 from './image/accessorie4.jpg';
import ToTopLink from './components/ToTopLink';

function App() {
  const items = [
    {
      id: 1,
      name: `Ardis Shultz 27.5" 19" 2023`,
      type: 'Bicycles',
      image: bike1,
      price: 350,
    },
    {
      id: 2,
      name: `Merida Big.Seven 15 27,2022`,
      type: 'Bicycles',
      image: bike2,
      price: 450,
    },
    {
      id: 3,
      name: `Merida Big.Nine XT 29 2022`,
      type: 'Bicycles',
      image: bike3,
      price: 400,
    },
    {
      id: 4,
      name: `Merida ENDURANCE 4000`,
      type: 'Bicycles',
      image: bike4,
      price: 350,
    },
    {
      id: 5,
      name: `Bicycle Gloves Blue`,
      type: 'Accessories',
      image: accessorie1,
      price: 35,
    },
    {
      id: 6,
      name: `Bicycle Gloves Gold`,
      type: 'Accessories',
      image: accessorie2,
      price: 45,
    },
    {
      id: 7,
      name: `Bicycle Gloves Red`,
      type: 'Accessories',
      image: accessorie3,
      price: 40,
    },
    {
      id: 8,
      name: `Bicycle Gloves Pink`,
      type: 'Accessories',
      image: accessorie4,
      price: 35,
    },
    {
      id: 9,
      name: `Bicycle Helmet Pink`,
      type: 'Accessories',
      image: 'https://nicewellenterprise.xyz/wp-content/uploads/2021/04/helmet-2.jpg',
      price: 35,
    },
    {
      id: 10,
      name: `Bicycle Helmet Green`,
      type: 'Accessories',
      image: 'https://nicewellenterprise.xyz/wp-content/uploads/2021/04/helmet-3.jpg',
      price: 35,
    },
    {
      id: 11,
      name: `Bicycle Helmet Pink`,
      type: 'Accessories',
      image: 'https://nicewellenterprise.xyz/wp-content/uploads/2021/04/helmet-4.jpg',
      price: 35,
    },
    {
      id: 11,
      name: `Bicycle Helmet Pink`,
      type: 'Accessories',
      image: 'https://nicewellenterprise.xyz/wp-content/uploads/2021/04/helmet-1.jpg',
      price: 35,
    },
    {
      id: 12,
      name: `BeDa LeDa Electric Bike`,
      type: 'Bicycles',
      image:
        'https://repedal.org/cdn/shop/products/H0a1d38f0b5e04b4f813220ba09ca57a0s.jpg?v=1692142498&width=1946',
      price: 1999,
    },
  ];

  const [cartItems, setCartItems] = useState([]);

  return (
    <>
      <ToTopLink />
      <Routes>
        <Route
          path="/"
          element={<Home items={items} cartItems={cartItems} setCartItems={setCartItems} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
