import React, { useContext } from 'react';
import { ExtendUpdateContext } from './Main.jsx';

export default function ImageThumbnails() {
  // declare state variables here
  const {
    styles, product, currentStyle, handleChangeStyle, styleThumbnails,
  } = useContext(ExtendUpdateContext);

  return (
    <div>
      {styleThumbnails.map((item, index) => (
        <div
          className="overview-image-thumbnail"
          style={{ backgroundImage: `url(${item.thumbnail_url})` }}
          key={index}
          onClick={(event) => {
            event.stopPropagation();
            // console.log(currentStyle.style_id, index);
            handleChangeStyle(currentStyle.style_id, index);
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
