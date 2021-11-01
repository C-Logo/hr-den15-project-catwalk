import React, { useContext } from 'react';
import { ExtendUpdateContext } from './Main.jsx';

export default function RightColumn() {
  // declare state variables here
  const { product } = useContext(ExtendUpdateContext);

  return (
    <div className="overview-right">
      <div className="small"> </div>
      <div className="small">(Insert Star Rating)</div>
      <div className="small">{product.category}</div>
      <div className="medium"><h2>{product.name}</h2></div>
      <div className="small">${product.default_price}</div>
      <div className="large">Style > Selected Style</div>
      <div className="medium">Select Size</div>
      <div className="medium">Add to Bag</div>
      <div className="small"> </div>
    </div>
  );
}
