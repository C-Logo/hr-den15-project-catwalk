import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import SearchQuestion from './QuestionSearch.jsx';
import EachQuestion from './EachQuestion.jsx';
import EachAnswer from './EachAnswer.jsx';
import QuestionList from './QuestionList.jsx';
import Modal from './Modal.jsx';
import AnswerModal from './AnswerModal.jsx';

export const QuestionContext = React.createContext();

export default function Questions(props) {
  const [questionArray, setquestionArray] = useState([]);
  const [showMoreQuestions, setShowMoreQuestions] = useState(true);
  const [showModal, setShowModal] = useState(false);

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
    setShowMoreQuestions(!showMoreQuestions);
  }
  function showModalWindow() {
    setShowModal(!showModal);
  }

  return (
    <QuestionContext.Provider value={{
      questionArray, showMoreQuestions, showModal, setShowModal,
    }}
    >
      <div onClick={(e) => { props.interactionHandler(e, 'Questions and Answers'); }} id="questioncontainer">
        <div id="qandaheader">QUESTIONS & ANSWERS</div>
        <div><SearchQuestion /></div>
        {/* <div><EachQuestion /></div> */}
        {/* <div><EachAnswer /></div> */}
        <div><QuestionList /></div>
        <div><Modal /></div>
        <button onClick={getMoreQuestions}>MORE ANSWERED QUESTIONS</button>
        <button onClick={showModalWindow}>ADD A QUESTION +</button>
      </div>
    </QuestionContext.Provider>
  );
}
