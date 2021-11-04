import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import SearchQuestion from './QuestionSearch.jsx';
import EachQuestion from './EachQuestion.jsx';
import EachAnswer from './EachAnswer.jsx';
import QuestionList from './QuestionList.jsx';

export const QuestionContext = React.createContext();

export default function Questions() {
  const [questionArray, setquestionArray] = useState([]);
  const [showMoreQuestions, setShowMoreQuestions] = useState(true);

  function getQuestions() {
    axios.get('/qa/questions', { params: { product_id: 44388 } })
      .then((response) => {
        const { data } = response;
        setquestionArray(data.results);
      })
      .catch();
  }
  useEffect(() => {
    getQuestions();
  }, []);

  function getMoreQuestions() {
    console.log('getting qs');
    setShowMoreQuestions(!showMoreQuestions);
  }

  return (
    <QuestionContext.Provider value={{ questionArray, showMoreQuestions }}>
      <div id="questioncontainer">
        <div id="qandaheader">QUESTIONS & ANSWERS</div>
        <div><SearchQuestion /></div>
        {/* <div><EachQuestion /></div> */}
        {/* <div><EachAnswer /></div> */}
        <div><QuestionList /></div>
        <button onClick={getMoreQuestions}>MORE ANSWERED QUESTIONS</button>
        <button>ADD A QUESTION +</button>
      </div>
    </QuestionContext.Provider>
  );
}
