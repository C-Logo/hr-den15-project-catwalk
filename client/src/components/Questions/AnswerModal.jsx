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
  const [question_id, setQuestion_Id] = useState(367407);

  function postData() {
    axios.post(`/qa/questions/${question_id}/answers`, {
      body: text, name, email, photos: [],
    })
      .then((response) => {
        console.log(response);
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
    console.log('text', text);
    setText(e.target.value);
  }

  function closeWindow() {
    setShow(!show);
  }
  return (show
    ? (
      <div className="answermodal">
        <div className="modalheader">Add An Answer</div>
        <form>
          <label id="answermodalnickname">Nickname *</label>
          <input
            id="nickname"
            type="text"
            placeholder="Example: jackson11!"
            value={name}
            onChange={onNameChange}
          />
          <div />
          <label id="answermodalemail">Email *</label>
          <input
            id="email"
            type="text"
            placeholder="Example: jackson11@email.com"
            value={email}
            onChange={onEmailChange}
          />
          <div />
          <label id="answermodalinput">Input</label>
          <input
            id="modalinputfield"
            type="text"
            placeholder="text goes here"
            maxLength="1000"
            value={text}
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
