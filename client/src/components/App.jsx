import React, { useState } from 'react';
import Overview from './Overview.jsx';
import Questions from './Questions/Questions.jsx';
import Review from './reviews/Reviews.jsx';

export default function App() {
  // delcare state variables

  return (
    <div>
      <Overview />
      <Questions />
      <Review />
    </div>
  );
}
