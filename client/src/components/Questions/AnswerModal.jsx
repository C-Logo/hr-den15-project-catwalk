import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { QuestionContext } from './Questions.jsx';

export default function AnswerModal(props) {
  const show = props.showModal;
  const setShow = props.setModal;
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [email, setEmail] = useState('');
  const [productID, setProductID] = useState(44389);
  const [productName, setProductName] = useState('Camo');
  const [question_id, setQuestion_Id] = useState(367407);
  const question_body = props.questionBody;

  function postData() {
    axios.post(`/qa/questions/${question_id}/answers`, {
      body: text, name, email, photos: [],
    })
      .then((response) => {
        setShow(!show);
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

  function closeWindow() {
    setShow(!show);
  }

  function checkForValidFields() {
    if (email.includes('@' && '.') && (name.length > 0 && email.length > 0 && text.length > 0)) {
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
  return (show
    ? (
      <div className="answermodal">
        <div className="modalheader">Submit an Answer</div>
        <div>
          {productName}
          :
          {' '}
          {question_body}
        </div>
        <form>
          <label id="answermodalnickname">Nickname *</label>
          <input
            id="nickname"
            type="text"
            placeholder="Example: jack543!!"
            value={name}
            maxLength="60"
            onChange={onNameChange}
          />
          <div />
          <div>For privacy reasons, do not use your full name or email address</div>
          <label id="answermodalemail">Email *</label>
          <input
            id="email"
            type="text"
            placeholder="Example: jackson11@email.com"
            value={email}
            maxLength="60"
            onChange={onEmailChange}
          />
          <div />
          <div>For authentication reasons, you will not be emailed</div>
          <label id="answermodalinput">Input</label>
          <textarea
            id="modalinputfield"
            type="text"
            placeholder="text goes here"
            maxLength="1000"
            maxLength="60"
            value={text}
            onChange={onTextChange}
          />
        </form>
        <div />
        <button className="modalphotobutton">Upload a photo</button>
        <div />
        <span> * Mandatory field </span>
        <div />
        <button className="modalsubmitbutton" onClick={checkForValidFields}>Submit</button>
        <div />
        <button className="modalclosebutton" onClick={closeWindow}>Close</button>
      </div>
    )
    : null);
}
