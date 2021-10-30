import React, { useState, useEffect, useContext } from 'react';
import IndividualQuestion from './Individualquestion.jsx';

export default function Questions() {
  // declare state variables here

  return (
    <div>
      <div className="container">
        {' '}
        <span>QUESTIONS & ANSWERS</span>
        <div><IndividualQuestion /></div>
      </div>
    </div>
  );
}
