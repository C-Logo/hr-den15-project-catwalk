import axios from 'axios';
import React, { useState, useContext, useEffect } from 'react';
import EachAnswer from './EachAnswer.jsx';

export default function EachQuestion(props) {
  const [answers, setAnswers] = useState({});
  const [question, setQuestion] = useState('');
  const [answerArray, setAnswerArray] = useState([]);
  const [question_id, setQuestionID] = useState(0);

  useEffect(() => {
    if (props.question) {
      setQuestion(props.question.question_body);
      setQuestionID(props.question.question_id);
      // const arrayOfAnswers = Object.values(props.question.answers);
    } else {
      setQuestion('no questions');
    }
  }, []);

  const [helpfulQuestionYes, setHelpfulQuestionYes] = useState(0);

  function handleQuestionOnClick() {
    setHelpfulQuestionYes(helpfulQuestionYes += 1);
  }

  return (
    <div className="mainquestion">
      <div className="questionline">
        <div className="indivquestion">Q:</div>
        <div className="indivquestion">
          {question}
          {}
          <EachAnswer answer={props.question.answers} id={props.question.question_id} />
        </div>
      </div>
      <div className="Helpfulq">
        <div> Helpful? </div>
        <div onClick={handleQuestionOnClick}>
          Yes
          (
          {helpfulQuestionYes}
          )
        </div>
        <div> | </div>
        <div> Add answer </div>
      </div>
    </div>
  );
}
