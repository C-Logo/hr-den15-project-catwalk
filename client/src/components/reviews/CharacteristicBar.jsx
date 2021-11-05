import React from 'react';

export default function CharacteristicBar(props) {
  const arrowStyle = {
    marginLeft: `${(Number(props.characteristicInfo.rating) / 5) * 100 - 2.5}%`,
  };
  return (
    <>
      <div className="breakdownTitle">
        {props.characteristicInfo.title}
      </div>
      <div className="breakdownGraphContainer">
        <div className="breakdownGraphBackground" />
        <div className="breakdownGraphArrow" style={arrowStyle} />
      </div>
      <div className="breakdownAxis">
        {props.characteristicInfo.breakdown.map((desc, index) => (
          <div key={index}>{desc}</div>
        ))}
      </div>
    </>
  );
}

/*
Characteristics:
Fit: --> Size
Too Small, Perfect, Too Large

Length:
Too Short, Perfect, Too Long

Comfort:
Poor, Perfect

Quality:
Poor, Great

*/
