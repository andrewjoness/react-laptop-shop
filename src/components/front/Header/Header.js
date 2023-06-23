import React from "react";
import { Link } from "react-router-dom";

import './Header.css';

const Header = ({cartItems}) => {
  
  return (
  <div className="header">
    <div>
        <h1>
            <Link to="/" className="logo">
                Laptops Shop
            </Link>
        </h1>
    </div>
    <div className="header-links">
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
        </ul>
        <ul>
            <li>
                <Link to="/signup">Signup</Link>
            </li>
        </ul>
        <ul>
            <li>
                <Link to="/cart" className="cart">
                    <i class="fa-solid fa-shopping-cart"></i>
                    <label className="cart-length">
                        {cartItems.length===0 ? "" : cartItems.length}
                    </label>
                </Link>
            </li>
        </ul>
    </div>
  </div>
)
}

export default Header