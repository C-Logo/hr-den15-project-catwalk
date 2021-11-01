import React, { useContext } from 'react';
import { ExtendUpdateContext } from './Main.jsx';

export default function ImageThumbnails() {
  // declare state variables here
  const {
    styles, product, currentStyle, handleChangeStyle,
  } = useContext(ExtendUpdateContext);
  // console.log('CS', currentStyle);

  return (
    <div>
      {currentStyle.photos.map((item) => {
        console.log(currentStyle, 'item', item);
        if (item.style_id === currentStyle) {
          console.log('yes!');
          return (
            <div
              className="overview-image-thumbnail"
              style={{ backgroundImage: `url(${item.photos.thumbnail_url})` }}
            />
          );
        }
      })}

      {/* <div className="overview-image-thumbnail">thumb1</div>
      <div >thumb2</div>
      <div className="overview-image-thumbnail">thumb3</div>
      <div className="overview-image-thumbnail">thumb4</div> */}
    </div>
  );
}
