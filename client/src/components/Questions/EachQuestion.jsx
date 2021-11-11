import axios from 'axios';
import React, { useState, useContext, useEffect } from 'react';
import AnswerModal from './AnswerModal.jsx';

import AnswerList from './AnswerList.jsx';

export default function EachQuestion(props) {
  const [question, setQuestion] = useState('');
  const [question_id, setQuestionID] = useState(0);
  let [helpfulQuestionYes, setHelpfulQuestionYes] = useState(props.question.question_helpfulness);
  const [clickedOnce, setClickedOnce] = useState(false);
  const [showAnswerModal, setShowAnswerModal] = useState(false);

  useEffect(() => {
    if (props.question) {
      setQuestion(props.question.question_body);
      setQuestionID(props.question.question_id);
    } else {
      setQuestion('no questions');
    }
  }, []);

  function handleQuestionOnClick() {
    setHelpfulQuestionYes(helpfulQuestionYes += 1);
    setClickedOnce(true);
    axios.put(`/qa/questions/${question_id}/helpful`, { question_id })
      .then((response) => {
      });
  }
  function showModalWindow() {
    setShowAnswerModal(!showAnswerModal);
  }

  return (
    <div className="mainquestion">
      <AnswerModal showModal={showAnswerModal} setModal={setShowAnswerModal} questionBody={question} />
      <div className="questionline">
        <div className="indivquestionheader">Q:</div>
        <div className="indivquestion">
          {question}
        <div>
          A:
        </div>
          <AnswerList answer={props.question.answers} id={props.question.question_id} />
        </div>
      </div>
      <div className="Helpfulq">
        <div> Helpful? </div>
        &nbsp;
        <div onClick={clickedOnce ? null : handleQuestionOnClick}>
          Yes
          (
          {helpfulQuestionYes}
          )
        </div>
        &nbsp;
        <div> | </div>
        &nbsp;
        <u onClick={showModalWindow}> Add answer </u>
      </div>
    </div>
  );
}
