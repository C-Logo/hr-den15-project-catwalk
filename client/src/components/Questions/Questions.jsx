import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import SearchQuestion from './QuestionSearch.jsx';
import EachQuestion from './EachQuestion.jsx';
import EachAnswer from './EachAnswer.jsx';

export const QuestionContext = React.createContext();

export default function Questions() {
  // declare state variables here
  const [questionArray, setquestionArray] = useState([]);

  function getQuestions() {
    axios.get('/qa/questions', { params: { product_id: 44388 } })
      .then((response) => {
        const { data } = response;
        // console.log('data', data);
        setquestionArray(data);
        // console.log('questions', response, 'qaarray', questionArray);
      })
      .catch();
  }
  useEffect(() => {
    getQuestions();
    // console.log('question', questionArray);
  }, []);

  return (
    <QuestionContext.Provider value={questionArray}>
      <div id="questioncontainer">
        <div id="qandaheader">QUESTIONS & ANSWERS</div>
        <div><SearchQuestion /></div>
        <div><EachQuestion /></div>
        <div><EachAnswer /></div>
      </div>
    </QuestionContext.Provider>
  );
}
