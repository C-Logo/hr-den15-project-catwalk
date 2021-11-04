import React, { useContext } from 'react';
import { ExtendUpdateContext } from './Main.jsx';

export default function SizeAndQty() {
  // declare state variables here
  const {
    sizesAndQuantities, currentStyle, handleChangePurchaseOptions,
  } = useContext(ExtendUpdateContext);

  return (
    <div className="medium">
      <select
        name="size"
        id="size-selector"
        className="overview-selector overview-size"
        onChange={(event) => {
          handleChangePurchaseOptions(
            event.target.value, null,
            event.target[event.target.selectedIndex].id,
            event.target.selectedIndex,
          );
        }}
      >
        <option value="">SELECT SIZE</option>
        {/* //need to add an out of stock option for when there are no more items */}
        {(sizesAndQuantities && sizesAndQuantities.length === 0) ? <option value="0" disabled>OUT OF STOCK</option> : ''}
        {(sizesAndQuantities !== undefined)
          ? sizesAndQuantities.map((item, index) => <option id={index} key={index} value={item.size}>{item.size}</option>)
          : <option value="0">Please Choose a Style</option>}
      </select>
      <select name="size" id="qty-selector" className="overview-selector overview-qty" onChange={(event) => { handleChangePurchaseOptions(null, event.target.value); }}>
        {(currentStyle.sizeSelected !== undefined)
          ? currentStyle.sizeSelected.map((item, index) => {
            if (index !== 0) {
              return <option key={index} value={item}>{item}</option>;
            }
          })
          : <option value="0" disabled>-</option>}
      </select>
    </div>
  );
}
