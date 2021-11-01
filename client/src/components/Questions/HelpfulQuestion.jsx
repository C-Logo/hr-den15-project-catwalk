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
  );
}
