import React, { useState, useEffect } from 'react';

export default function IndividualQuestion() {
  let [helpfulYes, setHelpfulYes] = useState(0);

  function handleOnClick() {
    setHelpfulYes(helpfulYes += 1);
  }

  return (
    <div>
      <div>Q:Who what which where why whether how?</div>
      <div>A:One two threee four five six seven</div>
      <div>Helpful? </div>
      <span onClick={handleOnClick}>
        Yes
        (
        {helpfulYes}
        )
      </span>
    </div>
  );
}
