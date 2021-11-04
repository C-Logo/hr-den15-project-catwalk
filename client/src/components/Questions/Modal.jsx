import React, { useContext, useState, useEffect } from 'react';
import { QuestionContext } from './Questions.jsx';

export default function Modal() {
  const { showModal, setShowModal } = useContext(QuestionContext);

  function closeWindow() {
    setShowModal(!showModal);
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
