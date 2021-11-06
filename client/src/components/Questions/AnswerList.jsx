import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { QuestionContext } from './Questions.jsx';
import EachAnswer from './EachAnswer.jsx';

export default function AnswerList(props) {
  const [questionID, setQuestionID] = useState(props.id);
  const [answersArray, setAnswersArray] = useState([]);
  const [defaultAnswers, setDefaultAnswers] = useState([]);
  const [defaultDisplay, setDefaultDisplay] = useState(true);
  const [displayAnswerButton, setDisplayAnswerButton] = useState('See more answers');

  function fetchAllAnswers() {
    axios.get(`/qa/questions/${questionID}/answers`, { params: { count: 10 } })
      .then((response) => {
        setAnswersArray(response.data.results);
        setDefaultAnswers(response.data.results.slice(0, 2));
      });
  }

  useEffect(() => {
    fetchAllAnswers();
  }, []);

  function renderMoreAnswers() {
    setDefaultDisplay(!defaultDisplay);
    if (displayAnswerButton === 'See more answers') {
      setDisplayAnswerButton('Collapse');
    } else {
      setDisplayAnswerButton('See more answers');
    }
  }

  return (
    <div>
      {defaultDisplay ? defaultAnswers.map((answer) => (
        <div key={answer.answer_id}>
          <EachAnswer answer={answer} renderMoreAnswers={renderMoreAnswers} />
        </div>
      ))
        : answersArray.map((answer) => (
          <div key={answer.answer_id}>
            <EachAnswer answer={answer} renderMoreAnswers={renderMoreAnswers} />
          </div>
        ))}
      <button onClick={renderMoreAnswers}>{displayAnswerButton}</button>
    </div>
  );
}
