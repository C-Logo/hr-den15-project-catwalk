import React, { useState, useEffect } from 'react';
import { QuestionContext } from './Questions.jsx';

export default function EachAnswer(props) {
  let [helpfulAnswerYes, setHelpfulAnswerYes] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [report, setReport] = useState(0);
  const [userName, setUserName] = useState('');
  const [date, setData] = useState(0);

  // useEffect(() => {
  //   console.log('props', props.question);
  //   if (props.question) {
  //     setAnswers(props.question);
  //   } else {
  //     setAnswers('no questions');
  //   }
  // }, []);

  function handleAnswerOnClick() {
    setHelpfulAnswerYes(helpfulAnswerYes += 1);
  }

  return (
    <div className="indivanswer">
      <div className="answerline">
        <div>A:</div>
        <div>
          {answers}
          {' '}
          placeholder
        </div>
      </div>
      <div className="helpfula">
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
        <span>Report</span>
      </div>
      <button>Load More Answers</button>
    </div>
  );
}
