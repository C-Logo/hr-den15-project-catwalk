import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function IndividualQuestion() {
  let [helpfulAnswerYes, setHelpfulAnswerYes] = useState(0);
  const [report, setReport] = useState(0);
  const [answers, setAnswers] = useState([]);

  function handleAnswerOnClick() {
    setHelpfulAnswerYes(helpfulAnswerYes += 1);
  }

  return (
    <div>
      <div className="askedquestion">Q:Who what which where why whether how?</div>
      <div className="answeredquestion">A:One two threee four five six seven</div>
      <div>
        <span>by User1234, Octotober 30th, 2021 |</span>
        <span> | </span>
      </div>
      <div>
        <span> Helpful? </span>
        <span onClick={handleAnswerOnClick}>
          Yes
          (
          {helpfulAnswerYes}
          )
        </span>
        <span> | </span>
        <span>Add Answer</span>
      </div>
    </div>
  );
}
