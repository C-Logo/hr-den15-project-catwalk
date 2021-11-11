import axios from 'axios';
import React, { useState, useEffect } from 'react';
import dateReformat from '../../helper-functions/dateReformat.js';

export default function EachAnswer(props) {
  let [helpfulAnswerYes, setHelpfulAnswerYes] = useState(0);
  const [answerBody, setAnswerBody] = useState('');
  const [author, setAuthor] = useState('');
  const [answerDate, setAnswerDate] = useState(0);
  const [answerID, setAnswerID] = useState(0);
  const [clickedOnce, setClickedOnce] = useState(false);
  const [reportClickedOnce, setReportClickedOnce] = useState(false);
  const [reported, setReported] = useState('Report');

  useEffect(() => {
    if (props) {
      setAnswerBody(props.answer.body);
      setAuthor(props.answer.answerer_name);
      setAnswerDate(props.answer.date);
      setHelpfulAnswerYes(props.answer.helpfulness);
      setAnswerID(props.answer.answer_id);
    }
  }, []);

  function handleHelpfulClick(e) {
    setHelpfulAnswerYes(helpfulAnswerYes += 1);
    setClickedOnce(true);
    axios.put(`/qa/answers/${answerID}/helpful`)
      .then((response) => {
      });
  }
  function reportAnswer(e) {
    setReported('Reported');
    const currentId = e.target.parentNode.id;
    axios.put(`/qa/answers/${currentId}/report`, { answer_id: currentId })
      .then((response) => {
        setReportClickedOnce(true);
      });
  }

  return (
    <div className="indivanswer">
      <div className="answerline">
        <div>
          {answerBody}

          <div className="helpful">
            by
            {' '}
            {author}
            ,                &nbsp;
            {dateReformat(answerDate)}
                &nbsp;
            <span> | </span>
                &nbsp;
            <span> Helpful? </span>
                &nbsp;
            <u onClick={clickedOnce ? null : (e) => { handleHelpfulClick(e); }}> Yes </u>
            <span>
              (
              { helpfulAnswerYes }
              )
            </span>
                &nbsp;
            <span> | </span>
                &nbsp;
            <span onClick={reportClickedOnce ? null : (e) => { reportAnswer(e); }}>{reported}</span>
          </div>
        </div>
      </div>
      {/* <button onClick={props.renderMoreAnswers}>{displayAnswerButton}</button> */}
    </div>
  );
}
