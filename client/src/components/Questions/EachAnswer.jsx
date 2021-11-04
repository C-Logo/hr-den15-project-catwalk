import axios from 'axios';
import React, { useState, useEffect } from 'react';
import dateReformat from '../../helper-functions/dateReformat.js';

export default function EachAnswer(props) {
  let [helpfulAnswerYes, setHelpfulAnswerYes] = useState(props.answer.helpfulness);
  const [answersArray, setAnswersArray] = useState([]);
  const [moreAnswers, setMoreAnswers] = useState(true);
  const [questionID, setQuestionID] = useState(props.id);
  const [defaultAnswers, setDefaultAnswers] = useState([]);
  const [answerID, setAnswerID] = useState(0);

  function fetchAllAnswers() {
    axios.get(`/qa/questions/${questionID}/answers`, { params: { count: 10 } })
      .then((response) => {
        setAnswersArray(response.data.results);
        setDefaultAnswers(response.data.results.slice(0, 2));
      });
  }

  useEffect(() => {
    if (props.answer) {
      setQuestionID(props.id);
      setAnswerID(props.answer.id);
      fetchAllAnswers();
    } else {
      setAnswersArray(['no questions']);
    }
  }, [helpfulAnswerYes]);

  function handleAnswerOnClick() {
    setHelpfulAnswerYes(helpfulAnswerYes += 1);
    axios.put(`/qa/answers/:${answerID}/helpful`, { helpfulAnswerYes })
      .then((response) => {
        setHelpfulAnswerYes('Thanks');
      });
  }
  function renderMoreAnswers() {
    setMoreAnswers(!moreAnswers);
  }

  return (
    <div className="indivanswer">
      <div className="answerline">
        <div>
          {' '}
          {moreAnswers ? defaultAnswers.map((qanswer, index) => (
            <div key={index}>
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
          ))
            : answersArray.map((qanswer, index) => (
              <div key={index}>
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
                  {/* thinking here could make a toggle that after click, changes
                to a span that says 'thanks for reporting!' */}
                </div>
              </div>
            ))}
        </div>
      </div>
      <button onClick={renderMoreAnswers}>Load More Answers</button>
    </div>
  );
}
