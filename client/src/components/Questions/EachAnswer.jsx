import axios from 'axios';
import React, { useState, useEffect } from 'react';
import dateReformat from '../../helper-functions/dateReformat.js';

export default function EachAnswer(props) {
  let [helpfulAnswerYes, setHelpfulAnswerYes] = useState(props.answer.helpfulness);
  const [answersArray, setAnswersArray] = useState([]);
  const [moreAnswers, setMoreAnswers] = useState(false);
  const [questionID, setQuestionID] = useState(props.id);

  function fetchAllAnswers() {
    axios.get(`/qa/questions/${questionID}/answers`, { params: { count: 10 } })
      .then((response) => {
        // console.log('response', response);
        setAnswersArray(response.data.results);
      });
  }

  useEffect(() => {
    if (props.answer) {
      // const arrayOfAnswers = Object.values(props.answer);
      // setAnswersArray(arrayOfAnswers);
      setQuestionID(props.id);
      fetchAllAnswers();
    } else {
      setAnswersArray('no questions');
    }
  }, []);

  function handleAnswerOnClick() {
    setHelpfulAnswerYes(helpfulAnswerYes += 1);
  }

  return (
    <div className="indivanswer">
      <div className="answerline">
        <div>
          {' '}
          {answersArray.map((qanswer) => (
            <div>
              A:
              {' '}
              {qanswer.body}
              <div className="helpful">
                by
                {' '}
                {qanswer.answerer_name}
                ,
                {' '}
                {dateReformat(qanswer.date)}
                {' '}
                |
                <span> Helpful? </span>
                <span onClick={handleAnswerOnClick}>
                  Yes
                  (
                  {qanswer.helpfulness}
                  )
                </span>
                <span> | </span>
                <span>Report</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button>Load More Answers</button>
    </div>
  );
}
