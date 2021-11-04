import React, { useContext } from 'react';
import ImageThumbnails from './ImageThumbnails.jsx';
import { ExtendUpdateContext } from './Main.jsx';

export default function Image() {
  // declare state variables here
  const {
    extend, changeExtend, styles, mainPhoto, currentStyle, styleThumbnails,
  } = useContext(ExtendUpdateContext);
  // console.log('photo change', mainPhoto);
  return (
    <div
      className="overview-image"
      style={{
        backgroundSize: extend ? 'cover' : 'contain',
        backgroundImage: `url(${mainPhoto})`,
      }}
      onClick={() => { changeExtend(); }}
      onKeyDown={() => { changeExtend(); }}
      role="button"
      tabIndex={0}
    >
      {styleThumbnails ? <ImageThumbnails /> : ''}
      <div className="overview-image-prev">&#10094;</div>
      <div className="overview-image-next">&#10095;</div>
      <svg
        className="overview-resizing-button"
        height="100%"
        version="1.1"
        viewBox="0 0 36 36"
        width="100%"
        onClick={() => { changeExtend(); }}
      >
        <path d="m 10,16 2,0 0,-4 4,0 0,-2 L 10,10 l 0,6 0,0 z" />
        <path d="m 20,10 0,2 4,0 0,4 2,0 L 26,10 l -6,0 0,0 z" />
        <path d="m 24,24 -4,0 0,2 L 26,26 l 0,-6 -2,0 0,4 0,0 z" />
        <path d="M 12,20 10,20 10,26 l 6,0 0,-2 -4,0 0,-4 0,0 z" />
      </svg>
    </div>
  );
}
