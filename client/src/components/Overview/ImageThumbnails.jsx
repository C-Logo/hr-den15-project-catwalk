import React, { useState, useContext } from 'react';
import { ExtendUpdateContext } from './Main.jsx';

export default function ImageThumbnails() {
  // declare state variables here
  const {
    currentStyle, handleChangeStyle, styleThumbnails, extend,
  } = useContext(ExtendUpdateContext);

  const [thumbImage, setThumbImage] = useState(0);

  return (
    <div>
      {currentStyle.name}
      {/* <div className="small"></div> */}
      {styleThumbnails.map((item, index) => (
        <div
          className="overview-image-thumbnail"
          id={`overview-thumbnail-${index}`}
          style={{
            backgroundImage: extend ? '' : `url(${item.thumbnail_url})`,
            border: (thumbImage === index) ? '2px solid #68b0ab' : '1px solid black',
            borderRadius: extend ? '50%' : '4px',
            transform: extend ? 'scale(.5)' : '',
          }}
          key={index}
          onClick={(event) => {
            event.stopPropagation();
            console.log(currentStyle.style_id, index, event.target.id);
            handleChangeStyle(currentStyle.style_id, index);
            setThumbImage(index);
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
