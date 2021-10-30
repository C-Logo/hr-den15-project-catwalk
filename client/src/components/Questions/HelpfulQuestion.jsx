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
<<<<<<< HEAD
      <span className="inline1">
        <span> Helpful? </span>
      </span>
      <span className="inline4">
        <span onClick={handleQuestionOnClick}>
=======
      <div className="inline1">
        <div> Helpful? </div>
      </div>
      <div className="inline4">
        <div onClick={handleQuestionOnClick}>
>>>>>>> a9afa0aba074fc519a77ff53bb22d0b34aa87973
          Yes
          (
          {helpfulQuestionYes}
          )
<<<<<<< HEAD
        </span>
      </span>
      <span className="inline2">
        <span> | </span>
      </span>
      <span className="inline3">
        <span onClick={getReq}> Add answer </span>
      </span>
=======
        </div>
      </div>
      <div className="inline2">
        <div> | </div>
      </div>
      <div className="inline3">
        <div onClick={getReq}> Add answer </div>
      </div>
>>>>>>> a9afa0aba074fc519a77ff53bb22d0b34aa87973
    </div>
  );
}
