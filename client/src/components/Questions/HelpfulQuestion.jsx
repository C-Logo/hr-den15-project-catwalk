import React, { useState } from 'react';

export default function HelpfulQuestion() {
  let [helpfulQuestionYes, setHelpfulQuestionYes] = useState(0);
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
    <div className="Helpfulq">
      <span className="inline1">
        <span> Helpful? </span>
      </span>
      <span className="inline4">
        <span onClick={handleQuestionOnClick}>
          Yes
          (
          {helpfulQuestionYes}
          )
        </span>
      </span>
      <span className="inline2">
        <span> | </span>
      </span>
      <span className="inline3">
        <span onClick={getReq}> Add answer </span>
      </span>
    </div>
  );
}
