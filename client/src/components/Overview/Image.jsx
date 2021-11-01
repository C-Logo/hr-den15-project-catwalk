import React, { useContext } from 'react';
import ImageThumbnails from './ImageThumbnails.jsx';
import { ExtendUpdateContext } from './Main.jsx';

export default function Image() {
  // declare state variables here
  const value = useContext(ExtendUpdateContext);

  return (
    <div className="overview-image">
      <ImageThumbnails />
      <div className="overview-image-prev">&#10094;</div>
      <div className="overview-image-next">&#10095;</div>
      <button
        type="button"
        className="overview-resizing-button"
        // src="./img/square.png"
        height="20"
        width="20"
        alt="resizer"
        onClick={() => { value(); }}
      />
    </div>
  );
}
