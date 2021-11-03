import React, { useState, useEffect } from 'react';
import { QuestionContext } from './Questions.jsx';

export default function EachAnswer(props) {
  let [helpfulAnswerYes, setHelpfulAnswerYes] = useState(0);
  const [answersArray, setAnswersArray] = useState([]);
  const [answer, setAnswer] = useState('');
  const [report, setReport] = useState(0);
  const [userName, setUserName] = useState('');
  const [date, setData] = useState(0);

  useEffect(() => {
    if (props.answer) {
      const arrayOfAnswers = Object.values(props.answer);
      setAnswersArray(arrayOfAnswers);
    } else {
      setAnswersArray('no questions');
    }
  }, []);

  function mapAnswers() {
    if (answersArray.length > 0) {
      answersArray.map((qanswer) => <div>{qanswer.body}</div>);
    } else {
      return <div>no answers</div>;
    }
  }

  function handleAnswerOnClick() {
    setHelpfulAnswerYes(helpfulAnswerYes += 1);
  }

  return (
    <div className="indivanswer">
      <div className="answerline">
        <div>
          A:
          {answersArray.map((qanswer) => <div>{qanswer.body}</div>)}
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
