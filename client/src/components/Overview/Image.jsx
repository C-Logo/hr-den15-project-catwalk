import React, { useContext } from 'react';
import ImageThumbnails from './ImageThumbnails.jsx'
import { ExtendUpdateContext } from './Main.jsx';

export default function Image() {
  // declare state variables here
  const value = useContext(ExtendUpdateContext);

  return (
    <div className="overview-image">
      <ImageThumbnails />
      <button
        type="button"
        className="overview-resizing-button"
        src="./img/square.png"
        height="10"
        width="20"
        alt="resizer"
        onClick={() => { value(); }}
      />
    </div>
  );
}
