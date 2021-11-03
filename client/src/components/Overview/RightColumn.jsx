import React, { useContext } from 'react';
// import Select from 'react-select'
import { ExtendUpdateContext } from './Main.jsx';

export default function RightColumn() {
  // declare state variables here
  const { product, styles, handleChangeStyle, currentStyle, sizesAndQuantities } = useContext(ExtendUpdateContext);

  return (
    <div className="overview-right">
      <div className="small"> </div>
      <div className="small">(Insert Star Rating)</div>
      <div className="small">{product.category}</div>
      <div className="medium"><h2>{product.name}</h2></div>
      <div className="small">${
        currentStyle.sale_price ?
          <div className="overview-flex">
            <div style={{ textDecorationLine: 'line-through', textDecorationStyle: 'solid' }}>{currentStyle.original_price}</div>
            <div>{currentStyle.sale_price}</div>
          </div> :
          <div>{currentStyle.original_price}</div>
      }
      </div>
      <div className="large overview-styles-container">
        <div className="overview-style-label">Style > Selected Style</div>
        {styles.map((item,index) => {
          return <div
            className="overview-styles-circle"
            style={{
              backgroundImage: `url(${item.photos[0].thumbnail_url})`,
              border: (currentStyle.style_id === item.style_id) ? '2px solid orange' : '1px solid black'
            }}
            key={index}
            onClick={() => handleChangeStyle(item.style_id)}>
          </div>;
        })}
      </div>
      <div className="medium">
        {/* {console.log(sizesAndQuantities)} */}
        {/* {console.log(item, item.size)} */}
        <select name="size" id="size-selector">
            <option value="">SELECT SIZE</option>
          {(sizesAndQuantities !== undefined) ?
            sizesAndQuantities.map((item) => {
              return <option value="1">{item.size}</option>
              }) :
              <option value='0'>"no sizes loaded"</option>
            }
        </select>
      </div>
      <div className="medium">Add to Bag</div>
      <div className="small"> </div>
    </div>
  );
}
