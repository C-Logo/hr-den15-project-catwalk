import React, { useState } from 'react';
import Overview from './Overview.jsx';
import Questions from './Questions.jsx';
import Review from './Reviews.jsx';

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
