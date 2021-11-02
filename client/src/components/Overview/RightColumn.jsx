import React, { useContext } from 'react';
import { ExtendUpdateContext } from './Main.jsx';

export default function RightColumn() {
  // declare state variables here
  const { product, styles, handleChangeStyle } = useContext(ExtendUpdateContext);

  return (
    <div className="overview-right">
      <div className="small"> </div>
      <div className="small">(Insert Star Rating)</div>
      <div className="small">{product.category}</div>
      <div className="medium"><h2>{product.name}</h2></div>
      <div className="small">${product.default_price}</div>
      <div className="large">
        <div>Style > Selected Style</div>
        {styles.map((item,index) => {
          return <div
            key={index}
            onClick={()=>handleChangeStyle(item.style_id)}>{item.name}</div>;
        })}
      </div>
      <div className="medium">Select Size</div>
      <div className="medium">Add to Bag</div>
      <div className="small"> </div>
    </div>
  );
}
