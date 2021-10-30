import React, { useState, useContext } from 'react';
// import { ExtendUpdateContext } from './Main.jsx';

export default function RightColumn() {
  // declare state variables here
  // const value = useContext(ExtendUpdateContext);

  return (
    <div className="overview-right">
      <div className="small"> </div>
      <div className="small">Star Rating</div>
      <div className="small">Category</div>
      <div className="medium"><h2>Expanded Product Name</h2></div>
      <div className="small">$369</div>
      <div className="large">Style &gt Selected Style</div>
      <div className="medium">Select Size</div>
      <div className="medium">Add to Bag</div>
      <div className="small"> </div>
    </div>
  );
}
