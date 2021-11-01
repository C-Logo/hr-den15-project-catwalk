import React, { useState, useEffect, useContext } from 'react';
import IndividualQuestion from './Individualquestion.jsx';
import SearchQuestion from './QuestionSearch.jsx';
import HelpfulQuestion from './HelpfulQuestion.jsx';
import EachQuestion from './EachQuestion.jsx';

export default function Questions() {
  // declare state variables here

  return (
    <div>
      <div className="questioncontainer">
        {' '}
        <div id="qandaheader">QUESTIONS & ANSWERS</div>
        <div><SearchQuestion /></div>
        <div className="row1">
          <EachQuestion />
          <HelpfulQuestion />
        </div>
      </div>
    </div>
  );
}
