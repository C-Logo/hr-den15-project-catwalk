import React, { useContext, useState, useEffect } from 'react';
import { QuestionContext } from './Questions.jsx';

export default function AnswerModal(props) {
  console.log(props);
  const show = props.showModal;
  const setShow = props.setModal;

  function closeWindow() {
    setShow(!show);
  }
  return (show
    ? (
      <div className="modal">
        <div className="modalheader">Add An Answer</div>
        <form>
          <label id="modalnickname">Nickname *</label>
          <input
            id="nickname"
            type="text"
            placeholder="Example: jackson11!"
          />
          <div />
          <label id="modalemail">Email *</label>
          <input
            id="email"
            type="text"
            placeholder="Example: jackson11@email.com"
          />
          <div />
          <label id="modalinput">Input</label>
          <input
            id="modalinputfield"
            type="text"
            placeholder="text goes here"
            maxLength="1000"
          />
        </form>
        <div />
        <button className="modalphotobutton">Upload a photo</button>
        <div />
        <span> * Mandatory field </span>
        <div />
        <button className="modalsubmitbutton">Submit</button>
        <div />
        <button className="modalclosebutton" onClick={closeWindow}>Close</button>
      </div>
    )
    : null);
}
