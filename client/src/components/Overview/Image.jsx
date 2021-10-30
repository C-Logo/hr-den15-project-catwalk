import React, { useState, useContext } from 'react';
import { ExtendUpdateContext } from './Main.jsx';

export default function Image() {
  // declare state variables here
  const value = useContext(ExtendUpdateContext);

  return (
    <div className="overview-image">
      <div className="thumbnails">
        Thumbnails
      </div>
      <button
        type="button"
        src="./img/square.png"
        height="20"
        width="20"
        alt="resizer"
        onClick={() => { value(); }}
      />
    </div>
  );
}
