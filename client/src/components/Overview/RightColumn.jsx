import React, { useContext } from 'react';
import { ExtendUpdateContext } from './Main.jsx';

export default function RightColumn() {
  // declare state variables here
  const { product, styles, handleChangeStyle, currentStyle } = useContext(ExtendUpdateContext);

  return (
    <div className="overview-right">
      <div className="small"> </div>
      <div className="small">(Insert Star Rating)</div>
      <div className="small">{product.category}</div>
      <div className="medium"><h2>{product.name}</h2></div>
      <div className="small">${product.default_price}</div>
      <div className="large overview-styles-container">
        <div className="overview-style-label">Style > Selected Style</div>
        {console.log('styles', styles, 'current style', currentStyle)}
        {styles.map((item,index) => {
          return <div
            className="overview-styles-circle"
            style={{
              backgroundImage: `url(${item.photos[0].thumbnail_url})`,
              // border: (currentStyle === item.style_id) ? '2px solid black' : '0px solid black'
            }}
            key={index}
            onClick={() => handleChangeStyle(item.style_id)}>
            {(currentStyle === item.style_id) ? 'yes' : ''}
          </div>;
        })}
      </div>
      <div className="medium">Select Size</div>
      <div className="medium">Add to Bag</div>
      <div className="small"> </div>
    </div>
  );
}
