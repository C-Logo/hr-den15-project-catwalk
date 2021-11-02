import React, { useState, useContext } from 'react';
import { ExtendUpdateContext } from './Main.jsx';

export default function ImageThumbnails() {
  // declare state variables here
  const {
    styles, product, currentStyle, handleChangeStyle, styleThumbnails,
  } = useContext(ExtendUpdateContext);

  const [thumbImage, setThumbImage] = useState(0);

  return (
    <div>
      {styleThumbnails.map((item, index) => (
        <div
          className="overview-image-thumbnail"
          style={{ backgroundImage: `url(${item.thumbnail_url})`, border: (thumbImage === index) ? '2px solid orange' : '1px solid black' }}
          key={index}
          onClick={(event) => {
            event.stopPropagation();
            handleChangeStyle(currentStyle.style_id, index);
            // console.log(thumbImage);
            setThumbImage(index);
            // console.log(thumbImage);
          }}
          onKeyDown={() => {}}
          role="button"
          tabIndex={-1}
          aria-label="thumbnail"
        />
      ))}
    </div>
  );
}
