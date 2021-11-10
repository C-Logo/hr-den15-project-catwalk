import React, { useContext } from 'react';
import axios from 'axios';
import { ExtendUpdateContext } from './Main.jsx';
import Price from './Price.jsx';
import Styles from './Styles.jsx';
import SizeAndQty from './SizeAndQty.jsx';
import StarRating from '../StarRating.jsx';

export default function RightColumn() {
  // declare state variables here
  const { product, purchaseOptions } = useContext(ExtendUpdateContext);

  const postReq = () => {
    for (let i = 0; i < purchaseOptions.quantity; i++) {
      axios.post('/cart', { sku_id: parseInt(purchaseOptions.sku) })
        .then((result) => {
          document.getElementById('header-check-cart').click();
          // console.log(result);
        });
    }
  };

  return (
    <div className="overview-right">
      <div className="small"> </div>
      <div className="small" />
      <div className="small">{product.category}</div>
      <div className="overview-flex">
        <StarRating />
        <a className="overview-link" href="#reviewTitle">See all reviews</a>
      </div>
      <div className="medium"><h2>{product.name}</h2></div>
      <Price />
      <Styles />
      <SizeAndQty />
      <div className="medium overview-flex">
        {purchaseOptions.size && purchaseOptions.quantity
          ? (
            <div
              className="overview-addtocart-button"
              onClick={() => {
                postReq();
                console.log('PURCHASED', purchaseOptions);
              }}
            >
              Add to Cart
            </div>
          )
          : (
            <div
              className="overview-addtocart-button 2"
              onClick={() => { document.getElementById('size-selector').focus(); }}
            >
              Add to Cart
            </div>
          )}
        <div className="overview-social">&#9734;</div>
      </div>
      <div className="small" />
    </div>
  );
}
