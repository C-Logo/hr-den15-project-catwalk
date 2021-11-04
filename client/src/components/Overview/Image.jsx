// import { removeData } from 'jquery';
import React, { useState, useContext } from 'react';
import ImageThumbnails from './ImageThumbnails.jsx';
import { ExtendUpdateContext } from './Main.jsx';

export default function Image() {
  // declare state variables here
  const {
    extend, changeExtend, mainPhoto, currentStyle, styleThumbnails, changeZoomed, imageZoomed,
  } = useContext(ExtendUpdateContext);
  let index;
  const zoomIn = false;

  const [zoomedIn, setZoomedIn] = useState(false);

  const handleImageChange = (amount) => {
    if ((currentStyle.photoIndex + amount) === currentStyle.photos.length) {
      index = 0;
    } else if ((currentStyle.photoIndex + amount) === -1) {
      index = currentStyle.photos.length - 1;
    } else {
      index = currentStyle.photoIndex + amount;
    }
    document.getElementById(`overview-thumbnail-${index}`).click();
  };

  const minimizeImage = () => {
    changeExtend();
    document.getElementById('overview-image-container').style.transform = 'scale(1)';
    document.getElementById('overview-image-container').style.cursor = 'auto';
    document.getElementById('overview-image-container').style.paddingTop = '0px';
    document.getElementById('overview-image-container').style.paddingLeft = '0px';
    setZoomedIn(false);
  };

  const handleZoomedImage = () => {
    document.getElementById('overview-image-container').style.transform = 'scale(2.5)';
    document.getElementById('overview-image-container').style.backgroundSize = 'contain';
    document.getElementById('overview-image-container').style.paddingTop = '60px';
    document.getElementById('overview-image-container').style.paddingLeft = '70px';
    document.getElementById('overview-image-container').style.cursor = 'url("./img/LineHorizontalResize.cur"), auto';
    if (zoomedIn) {
      minimizeImage();
    } else {
      setZoomedIn(true);
    }
  };

  const mousePanImage = (event) => {
    // console.log(event.clientX, event.clientY);
    document.getElementById('overview-image').style.transition = 'transform 0.15s ease';
    const width = document.getElementById('overview-image').clientWidth;
    const height = document.getElementById('overview-image').clientHeight;
    if (event.clientX > width / 2) {
      // console.log('right');
      document.getElementById('overview-image').scrollLeft += 2;
    } else {
      // console.log('left');
      document.getElementById('overview-image').scrollLeft -= 2;
    }
    if (event.clientY > (height / 2)) {
      // console.log('up');
      document.getElementById('overview-image').scrollTop += 2;
    } else {
      // console.log('down');
      document.getElementById('overview-image').scrollTop -= 2;
    }
  };

  return (
    <div
      className="overview-image"
      id="overview-image"
      onClick={() => {
        extend ? handleZoomedImage() : changeExtend();
      }}
      onMouseMove={(e) => { extend ? mousePanImage(e) : ''; }}
      onKeyDown={() => { changeExtend(); }}
      role="button"
      tabIndex={0}
    >
      <div
        id="overview-image-container"
        style={{
          backgroundSize: extend ? 'cover' : 'contain',
          backgroundImage: `url(${mainPhoto})`,
          cursor: extend ? 'cell' : 'auto',
        }}
      >
        {styleThumbnails ? <ImageThumbnails /> : ''}
        <div
          className="overview-image-prev"
          role="button"
          tabIndex={0}
          style={{
            left: extend ? '10%' : '22%',
            display: zoomedIn ? 'none' : 'inherit',
          }}
          onClick={(event) => {
            event.stopPropagation();
            handleImageChange(-1);
          }}
          onKeyDown={() => { handleImageChange(-1); }}
        >
          &#10094;
        </div>
        <div
          className="overview-image-next"
          role="button"
          tabIndex={0}
          style={{
            left: extend ? '90%' : '86%',
            display: zoomedIn ? 'none' : 'inherit',
          }}
          onClick={(event) => {
            event.stopPropagation();
            handleImageChange(1);
          }}
          onKeyDown={() => { handleImageChange(1); }}
        >
          &#10095;
        </div>
        <svg
          className="overview-resizing-button"
          height="100%"
          version="1.1"
          viewBox="0 0 36 36"
          width="100%"
          style={{
            display: zoomedIn ? 'none' : 'inherit',
          }}
          onClick={(event) => {
            event.stopPropagation();
            extend ? minimizeImage() : changeExtend();
          }}
        >
          <path d="m 10,16 2,0 0,-4 4,0 0,-2 L 10,10 l 0,6 0,0 z" />
          <path d="m 20,10 0,2 4,0 0,4 2,0 L 26,10 l -6,0 0,0 z" />
          <path d="m 24,24 -4,0 0,2 L 26,26 l 0,-6 -2,0 0,4 0,0 z" />
          <path d="M 12,20 10,20 10,26 l 6,0 0,-2 -4,0 0,-4 0,0 z" />
        </svg>
      </div>
    </div>
  );
}
