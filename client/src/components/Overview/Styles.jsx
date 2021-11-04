import React, { useContext } from 'react';
import { ExtendUpdateContext } from './Main.jsx';

export default function Styles() {
  // declare state variables here
  const { currentStyle, styles, handleChangeStyle } = useContext(ExtendUpdateContext);

  return (
      <div className="large overview-styles-container">
        <div className="overview-style-label" id="overview-stylebox">Style > Selected Style</div>
        {styles.map((item,index) => {
          return <div
            className="overview-styles-circle"
            id={`overview-style-${index}`}
            style={{
              backgroundImage: `url(${item.photos[0].thumbnail_url})`,
              border: (currentStyle.style_id === item.style_id) ? '2px solid orange' : '1px solid black',
            }}
            key={index}
            onClick={() => handleChangeStyle(item.style_id)}>
          </div>;
        })
        // document.getElementById('overview-style-0').click();
        }
      </div>
  );
}
