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
      <div className="inline1">
        <div> Helpful? </div>
      </div>
      <div className="inline4">
        <div onClick={handleQuestionOnClick}>
          Yes
          (
          {helpfulQuestionYes}
          )
        </div>
      </div>
      <div className="inline2">
        <div> | </div>
      </div>
      <div className="inline3">
        <div onClick={getReq}> Add answer </div>
      </div>
    </div>
  );
}
