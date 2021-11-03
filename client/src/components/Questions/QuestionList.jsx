import React, { useState, useEffect, useContext } from 'react';
import { QuestionContext } from './Questions.jsx';
import EachQuestion from './EachQuestion.jsx';

export default function QuestionList(props) {
  const { questionArray } = useContext(QuestionContext);
  const { showMoreQuestions } = useContext(QuestionContext);
  const defaultQuestions = questionArray.slice(0, 4);
  return showMoreQuestions
    ? defaultQuestions.map((question) => <EachQuestion question={question} />)
    : questionArray.map((question) => <EachQuestion question={question} />);
}
