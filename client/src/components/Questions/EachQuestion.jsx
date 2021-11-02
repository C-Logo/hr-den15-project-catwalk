import React, { useState, useContext, useEffect } from 'react';
import { QuestionContext } from './Questions.jsx';

export default function EachQuestion(props) {
  const [answers, setAnswers] = useState({});
  const [question, setQuestion] = useState('');
  const [answerArray, setAnswerArray] = useState([]);

  function answerArraySet() {
    setAnswerArray(Object.values(answers));
    console.log('setAA', answerArray);
  }
  useEffect(() => {
    console.log('props', props.question);
    if (props.question) {
      setQuestion(props.question.question_body);
      setAnswers(props.question.answers);
      answerArraySet();
      console.log('answers', answers);
      // console.log('answerArray', answerArray);
    } else {
      setQuestion('no questions');
      setAnswers('no answers');
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
          {answerArray.map((answer) => (
            <div>answer</div>
          ))}
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
