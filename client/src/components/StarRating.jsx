import React from 'react';

export default function StarRating(props) {
  // props should have a single property named rating that is a value between 1 and 5
  const starStyle = {
    width: `${props.rating / 5 * 100 * (99 / 100)}%`,
  };

  return (

    <div className="starContainer">
      <div className="starBackground" />
      <div className="starFiller" style={starStyle} />
      <div className="starBorder" id="starBorder1" />
      <div className="starBorder" id="starBorder2" />
      <div className="starBorder" id="starBorder3" />
      <div className="starBorder" id="starBorder4" />
      <div className="starBorder" id="starBorder5" />
      <div className="starForegroundv3" />
    </div>
  );
}

// style={`--rating: ${props.rating};`}
