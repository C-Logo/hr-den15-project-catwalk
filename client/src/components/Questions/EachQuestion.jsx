import axios from 'axios';
import React, { useState, useContext, useEffect } from 'react';
import EachAnswer from './EachAnswer.jsx';

export default function EachQuestion(props) {
  const [question, setQuestion] = useState('');
  const [question_id, setQuestionID] = useState(0);
  const [showMoreQuestions, setShowMoreQuestions] = useState(false);
  let [helpfulQuestionYes, setHelpfulQuestionYes] = useState(props.question.question_helpfulness);
  const [clickedOnce, setClickedOnce] = useState(false);

  useEffect(() => {
    if (props.question) {
      setQuestion(props.question.question_body);
      setQuestionID(props.question.question_id);
      // const arrayOfAnswers = Object.values(props.question.answers);
    } else {
      setQuestion('no questions');
    }
  }, []);

  function handleQuestionOnClick() {
    setHelpfulQuestionYes(helpfulQuestionYes += 1);
    axios.put(`/qa/questions/${question_id}/helpful`, { question_id })
      .then((response) => {
        setHelpfulQuestionYes('Thanks');
        setClickedOnce(true);
      });
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
        <div onClick={clickedOnce ? null : handleQuestionOnClick}>
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
