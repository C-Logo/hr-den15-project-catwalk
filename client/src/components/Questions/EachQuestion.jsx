import React, { useState, useContext, useEffect } from 'react';
import { QuestionContext } from './Questions.jsx';

export default function EachQuestion() {
  const questions = useContext(QuestionContext);
  console.log('eachquestion', questions);
  let [helpfulQuestionYes, setHelpfulQuestionYes] = useState(0);
  // useEffect(
  //   questions = useContext(QuestionContext),
  // );

  function handleQuestionOnClick() {
    setHelpfulQuestionYes(helpfulQuestionYes += 1);
  }

  function getReq() {
    axios.get('/qa/questions', { params: { product_id: 44388 } })
      .then((response) => {
        console.log('response', response);
      })
      .catch();
  }

  return (
    <div className="mainquestion">
      <div className="questionline">
        <div className="indivquestion">Q:</div>
        <div className="indivquestion">
          {/* {questions} */}
          {if (questions) {questions.results.map((question) => (
            <div>question.question_body</div>
          ))}}
          {' '}
          placeholder
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
        <div onClick={getReq}> Add answer </div>
      </div>
    </div>
  );
}
