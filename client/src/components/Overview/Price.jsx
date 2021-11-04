import React, { useContext } from 'react';
import { ExtendUpdateContext } from './Main.jsx';

export default function Price() {
  // declare state variables here
  const { currentStyle } = useContext(ExtendUpdateContext);

  return (
    <div className="small">
      $
      {
        currentStyle.sale_price
          ? (
            <div className="overview-flex">
              <div style={{ textDecorationLine: 'line-through', textDecorationStyle: 'solid' }}>{currentStyle.original_price}</div>
              <div>{currentStyle.sale_price}</div>
            </div>
          )
          : <div>{currentStyle.original_price}</div>
      }
    </div>
  );
}
