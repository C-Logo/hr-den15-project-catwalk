import React, { useState, useEffect, useContext } from 'react';
import SearchQuestion from './QuestionSearch.jsx';
import EachQuestion from './EachQuestion.jsx';
import EachAnswer from './EachAnswer.jsx';

export default function Questions() {
  // declare state variables here

  return (
    <div id="questioncontainer">
      <div id="qandaheader">QUESTIONS & ANSWERS</div>
      <div><SearchQuestion /></div>
      <div className="row1"><EachQuestion /></div>
      <div><EachAnswer /></div>
    </div>
  );
}
