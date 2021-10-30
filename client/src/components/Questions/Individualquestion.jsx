import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function IndividualQuestion() {
  let [helpfulQuestionYes, setHelpfulQuestionYes] = useState(0);
  let [helpfulAnswerYes, setHelpfulAnswerYes] = useState(0);
  const [report, setReport] = useState(0);

  function handleQuestionOnClick() {
    setHelpfulQuestionYes(helpfulQuestionYes += 1);
  }
  function handleAnswerOnClick() {
    setHelpfulAnswerYes(helpfulAnswerYes += 1);
  }

  return (
    <div>
      <div>Q:Who what which where why whether how?</div>
      <div>A:One two threee four five six seven</div>
      <div>
        <span>Helpful? </span>
        <span className="inline" onClick={handleQuestionOnClick}>
          Yes
          (
          {helpfulQuestionYes}
          )
        </span>
        <span className="inline"> | </span>
        <span className="inline"> Add answer </span>
      </div>
      <div>
        <span>by User1234, Octotober 30th, 2021 |</span>
        <span> | </span>
        <span> Helpful? </span>
        <span onClick={handleAnswerOnClick}>
          Yes
          (
          {helpfulAnswerYes}
          )
        </span>
        <span> | </span>
      </div>
    </div>
  );
}
