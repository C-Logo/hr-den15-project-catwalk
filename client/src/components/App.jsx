import React, { useState } from 'react';
import Overview from './Overview/Overview.jsx';
import Questions from './Questions/Questions.jsx';
import Reviews from './reviews/Reviews.jsx';

export default function App() {
  // delcare state variables

  return (
    <div id="mainContainer">
      <Overview />
      <Questions />
      <Reviews />
    </div>
  );
}
