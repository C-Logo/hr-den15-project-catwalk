import React, { useContext } from 'react';
import { AppContext } from './App.jsx';

export default function StarRating(props) {
  const { averageStars } = useContext(AppContext);
  // props should have a single property named rating that is a value between 1 and 5
  function makeStyle() {
    if (props.rating) {
      return {
        width: `${props.rating / 5 * 100 * (99 / 100)}%`,
      };
    }
    return {
      width: `${averageStars / 5 * 100 * (99 / 100)}%`,
    };
  }

  const starStyle = makeStyle();

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
