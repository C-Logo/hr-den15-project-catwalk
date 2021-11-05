import axios from 'axios';
import React, { useContext, useState, useEffect } from 'react';
import { QuestionContext } from './Questions.jsx';

export default function Modal() {
  const { showModal, setShowModal } = useContext(QuestionContext);
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [email, setEmail] = useState('');
  const [productID, setProductID] = useState(0);

  function closeWindow() {
    setShowModal(!showModal);
  }
  function postData() {
    axios.post('/qa/questions', {
      body: text, name, email, product_id: 44389,
    })
      .then((response) => {
        console.log(response);
        setShowModal(false);
      });
  }
  function onNameChange(e) {
    setName(e.target.value);
  }
  function onEmailChange(e) {
    setEmail(e.target.value);
  }
  function onTextChange(e) {
    console.log('text', text);
    setText(e.target.value);
  }
  return (showModal
    ? (
      <div className="modal">
        <div className="modalheader">Add A Question</div>
        <form>
          <label id="modalnickname">Nickname *</label>
          <input
            id="nickname"
            type="text"
            value={name}
            placeholder="Example: jackson11!"
            onChange={onNameChange}
          />
          <div />
          <label id="modalemail">Email *</label>
          <input
            id="email"
            type="text"
            value={email}
            placeholder="Example: jackson11@email.com"
            onChange={onEmailChange}
          />
          <div />
          <div>For privacy reasons, do not use your full name or email address</div>
          <div />
          <label id="modalinput">Input</label>
          <input
            id="modalinputfield"
            type="text"
            value={text}
            placeholder="text goes here"
            maxLength="1000"
            onChange={onTextChange}
          />
        </form>
        <div />
        <button className="modalphotobutton">Upload a photo</button>
        <div />
        <span> * Mandatory field </span>
        <div />
        <button className="modalsubmitbutton" onClick={postData}>Submit</button>
        <div />
        <button className="modalclosebutton" onClick={closeWindow}>Close</button>
      </div>
    )
    : null);
}
