import axios from 'axios';
import React, { useContext, useState, useEffect } from 'react';
import { QuestionContext } from './Questions.jsx';

export default function Modal() {
  const { showModal, setShowModal, getQuestions } = useContext(QuestionContext);
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [email, setEmail] = useState('');
  const [productID, setProductID] = useState(0);
  const [productName, setProductName] = useState('Camo Onesie');

  function closeWindow() {
    setShowModal(!showModal);
  }
  function postData() {
    axios.post('/qa/questions', {
      body: text, name, email, product_id: 44389,
    })
      .then((response) => {
        setShowModal(false);
        getQuestions();
      });
  }
  function onNameChange(e) {
    setName(e.target.value);
  }
  function onEmailChange(e) {
    setEmail(e.target.value);
  }
  function onTextChange(e) {
    setText(e.target.value);
  }

  function checkForValidFields() {
    if (email.includes('@' && '.') && (name.length > 0 || email.length > 0 || text.length > 0)) {
      postData();
    } else if (name.length < 1) {
      alert('You must enter the following: Nickname');
    } else if (text.length < 1) {
      alert('You must enter the following: Input');
    } else if (email.length < 1) {
      alert('You must enter the following: Email');
    } else {
      alert('Email is not valid');
    }
  }
  return (showModal
    ? (
      <div className="modal">
        <div className="modalheader">Ask Your Question</div>
        <div>
          About the
          {' '}
          {productName}
        </div>
        &nbsp;
        <div />
        <form>
          <label id="modalnickname">Nickname *</label>
          <input
            id="nickname"
            type="text"
            value={name}
            placeholder="Example: jackson11!"
            maxLength="60"
            onChange={onNameChange}
          />
          <div />
          <div>For privacy reasons, do not use your full name or email address</div>
          &nbsp;
          <div />
          <label id="modalemail">Email *</label>
          <input
            id="email"
            type="text"
            value={email}
            placeholder="Example: jackson11@email.com"
            maxLength="60"
            onChange={onEmailChange}
          />
          <div />
          <div>For authentication reasons, you will not be emailed</div>
          &nbsp;
          <div />
          <label id="modalinput">Input*</label>
          <br />
          <textarea
            id="modalinputfield"
            type="text"
            value={text}
            placeholder="Why did you like the product or not?"
            maxLength="1000"
            onChange={onTextChange}
          />
        </form>
        <span> * Mandatory field </span>
        <div />
        <button className="modalsubmitbutton" onClick={checkForValidFields}>Submit</button>
        <div />
        <button className="modalclosebutton" onClick={closeWindow}>Close</button>
      </div>
    )
    : null);
}
