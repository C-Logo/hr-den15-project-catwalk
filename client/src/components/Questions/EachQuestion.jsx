import React, { useState, useContext, useEffect } from 'react';
import { QuestionContext } from './Questions.jsx';

export default function EachQuestion(props) {
  const [question, setQuestion] = useState('');
  useEffect(() => {
    // console.log('props', props.question);
    if (props.question) {
      setQuestion(props.question.question_body);
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
