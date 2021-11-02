import React, { useState, useEffect, useContext } from 'react';
import { QuestionContext } from './Questions.jsx';
import EachQuestion from './EachQuestion.jsx';

export default function QuestionList() {
  const { questionArray } = useContext(QuestionContext);
  return questionArray.map((question) => <EachQuestion question={question} />);
}
