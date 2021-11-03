import React, { useContext } from 'react';
// import Select from 'react-select'
import { ExtendUpdateContext } from './Main.jsx';

export default function RightColumn() {
  // declare state variables here
  const { product, styles, handleChangeStyle, currentStyle, sizesAndQuantities, handleChangePurchaseOptions } = useContext(ExtendUpdateContext);

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
        <select name="size" id="size-selector" className="overview-selector overview-size" onChange={event=>{handleChangePurchaseOptions(event.target.value, null, event.target[event.target.selectedIndex].id)}}>
          <option value="">SELECT SIZE</option>
          {/* //need to add an out of stock option for when there are no more items */}
          {(sizesAndQuantities && sizesAndQuantities.length === 0) ? <option value='0' disabled>OUT OF STOCK</option> : ''}
          {(sizesAndQuantities !== undefined) ?
            sizesAndQuantities.map((item, index) => {
              return <option id={index} key={index} value={item.size}>{item.size}</option>
              }) :
              <option value='0'>Please Choose a Style</option>
            }
        </select>
        <select name="size" id="qty-selector" className="overview-selector overview-qty" onChange={event=>{handleChangePurchaseOptions(null, event.target.value)}}>
          {(currentStyle.sizeSelected !== undefined) ?
            currentStyle.sizeSelected.map((item, index) => {
              if (index !== 0) {
                return <option key={index} value={item}>{item}</option>
              }
              }) :
              <option value='0' disabled>-</option>
            }
        </select>
      </div>
      <div className="medium">Add to Bag</div>
      <div className="small"> </div>
    </div>
  );
}
