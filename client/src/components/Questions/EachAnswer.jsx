import axios from 'axios';
import React, { useState, useEffect } from 'react';
import dateReformat from '../../helper-functions/dateReformat.js';

export default function EachAnswer(props) {
  let [helpfulAnswerYes, setHelpfulAnswerYes] = useState(0);
  const [answersArray, setAnswersArray] = useState([]);
  const [moreAnswers, setMoreAnswers] = useState(true);
  const [questionID, setQuestionID] = useState(props.id);
  const [defaultAnswers, setDefaultAnswers] = useState([]);
  const [answerID, setAnswerID] = useState(0);
  const [clickedOnce, setClickedOnce] = useState(false);
  const [postedHelpful, setPostedHelpful] = useState(false);
  const [reportClickedOnce, setReportClickedOnce] = useState(false);

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
      fetchAllAnswers();
    } else {
      setAnswersArray(['no questions']);
    }
  }, []);

  function handleAnswerOnClick(e) {
    const currentId = e.target.parentNode.id;
    setAnswerID(e.currentTarget.id);
    setHelpfulAnswerYes(helpfulAnswerYes += 1);
    axios.put(`/qa/answers/${e.currentTarget.id}/helpful`, { answer_id: currentId })
      .then((response) => {
        console.log(response);
        setClickedOnce(true);
      });
  }
  function reportAnswer(e) {
    const currentId = e.target.parentNode.id;
    console.log('current', currentId);
    axios.put(`/qa/answers/${currentId}/report`, { answer_id: currentId })
      .then((response) => {
        console.log(response);
        setReportClickedOnce(true);
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
              {/* {setHelpfulAnswerYes(qanswer.helpfulness)} */}
              A:
              {' '}
              {qanswer.body}
              <div id={qanswer.answer_id} className="helpful">
                by
                {' '}
                {qanswer.answerer_name}
                ,
                {' '}
                {dateReformat(qanswer.date)}
                {' '}
                <span> Helpful? </span>
                <span> Yes </span>
                <span onClick={clickedOnce ? null : (e) => { handleAnswerOnClick(e); }}>
                  (
                  {qanswer.helpfulness}
                  )
                </span>
                <span> | </span>
                <span onClick={reportClickedOnce ? null : (e) => { reportAnswer(e); }}>Report</span>
              </div>
            </div>
          ))
            : answersArray.map((qanswer, index) => (
              <div key={index}>
                A:
                {' '}
                {qanswer.body}
                <div id={qanswer.answer_id} className="helpful">
                  by
                  {' '}
                  {qanswer.answerer_name}
                  ,
                  {' '}
                  {dateReformat(qanswer.date)}
                  {' '}
                  <span> Helpful? </span>
                  <span> Yes </span>
                  <span onClick={clickedOnce ? null : (e) => { handleAnswerOnClick(e); }}>
                    (
                    {qanswer.helpfulness}
                    )
                  </span>
                  <span> | </span>
                  <span onClick={reportClickedOnce ? null : (e) => { reportAnswer(e); }}>Report</span>
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
