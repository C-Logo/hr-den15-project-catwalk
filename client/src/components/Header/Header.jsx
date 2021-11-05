import axios from 'axios';
import React, { useState } from 'react';

export default function Header() {
  const [cart, setCart] = useState();

  const checkCart = () => {
    axios.get('/cart')
      .then((results) => {
        setCart(results.data.length);
      });
  };

  return (
    <div className="header">
      <img className="overview-header-image" src="./img/image.webp" alt="company logo" />
      <span className="flex-item">
        <div className="overview-header-title">Project Catwalk</div>
        <div className="overview-header-cart">by: C-Logo</div>
      </span>
      <span id="header-check-cart" className="overview-header-cart flex-item" onClick={() => { checkCart(); }}>{(cart > 0) ? `Items in Cart: ${cart}` : 'Cart is empty'}</span>
    </div>
  );
}
