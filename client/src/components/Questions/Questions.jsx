import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import QuestionList from './QuestionList.jsx';
import Modal from './Modal.jsx';

export const QuestionContext = React.createContext();

export default function Questions(props) {
  const [questionArray, setQuestionArray] = useState([]);
  const [showMoreQuestions, setShowMoreQuestions] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [email, setEmail] = useState('');
  const [productID, setProductID] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  let [arrayIndex, setArrayIndex] = useState(1);
  const [moreQuestionsButton, setMoreQuestionsButton] = useState(true);

  function getQuestions() {
    axios.get('/qa/questions', { params: { product_id: 44389, count: 100 } })
      .then((response) => {
        const { data } = response;
        setQuestionArray(data.results);
      })
      .catch();
  }
  useEffect(() => {
    getQuestions();
  }, []);

  function getMoreQuestions() {
    if (arrayIndex >= questionArray.length - 1) {
      setMoreQuestionsButton(false);
    }
    setArrayIndex(arrayIndex += 2);
  }
  function showModalWindow() {
    setShowModal(!showModal);
  }
  return (
    <QuestionContext.Provider value={{
      questionArray,
      showMoreQuestions,
      showModal,
      setShowModal,
      searchQuery,
      setSearchQuery,
      arrayIndex,
      getQuestions
    }}
    >
      <div onClick={(e) => { props.interactionHandler(e, 'Questions and Answers'); }} id="questioncontainer">
        <h2>QUESTIONS & ANSWERS</h2>
        <div />
        <div className="modalcontainer"><Modal /></div>
        <div className="questionslist"><QuestionList /></div>
        {moreQuestionsButton ? <button onClick={getMoreQuestions}>MORE ANSWERED QUESTIONS</button> : <span />}
        <button onClick={showModalWindow} data-testid='questionbutton'>ADD A QUESTION +</button>
      </div>
    </QuestionContext.Provider>
  );
}
