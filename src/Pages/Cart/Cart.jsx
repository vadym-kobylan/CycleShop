import React, { useEffect, useState } from 'react';
import './Cart.css';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';
import cycleLogo from '../../image/logo-1.png';
import CartSvg from '../../components/CartSvg';
import trashCan from '../../image/trash-icon.svg';
import emptyBag from '../../image/empty-card.svg';

const Cart = ({ cartItems, setCartItems }) => {
  const [totalQuantity, setTotalQuantity] = useState(
    cartItems.reduce((total, item) => total + item.quantity, 0),
  );
  const [totalPrice, setTotalPrice] = useState(
    cartItems.reduce((total, item) => total + item.quantity * item.price, 0),
  );

  useEffect(() => {
    setTotalQuantity(cartItems.reduce((total, item) => total + item.quantity, 0));
    setTotalPrice(cartItems.reduce((total, item) => total + item.quantity * item.price, 0));
  }, [cartItems]);

  return (
    <div>
      <div className="top-bar darken">
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
        <Link className="center-link" to="/cart">
          <CartSvg fill="#fff" className="cart-navigation" />
        </Link>
      </div>
      <section className="cart-wrapper">
        <div className="cart-container">
          <div className="cart-header">
            <h3 className="cart-heading">Shopping Bag</h3>
            <h5 className="cart-action" onClick={() => setCartItems([])}>
              <img src={trashCan} className="trashcan-icon" />
            </h5>
          </div>

          {cartItems.length ? (
            <>
              {cartItems.map(({ id, name, type, image, price, quantity }) => (
                <CartItem
                  key={id}
                  id={id}
                  name={name}
                  type={type}
                  image={image}
                  price={price}
                  quantity={quantity}
                  setCartItems={setCartItems}
                  cartItems={cartItems}
                />
              ))}

              <div className="checkout">
                <div className="total">
                  <div className="total-left">
                    <div className="subtotal">{`Sub-Total: ${totalQuantity}`}</div>
                  </div>
                  <div className="total-amount">${totalPrice.toFixed(2)}</div>
                </div>
                <button className="submit">Checkout</button>
              </div>
            </>
          ) : (
            <div className="empty-cart">
              <div>Cart is Empty</div>
              <img src={emptyBag} className='empty-bag-svg'/>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Cart;
