import React, { useState, useEffect, useContext } from 'react';
import { QuestionContext } from './Questions.jsx';
import EachQuestion from './EachQuestion.jsx';

export default function QuestionList(props) {
  const { questionArray, arrayIndex } = useContext(QuestionContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [searching, setSearching] = useState(false);
  const [foundQuestions, setFoundQuestions] = useState([]);

  function runSearch() {
    const currentMatches = questionArray.map((question) => {
      if (question.question_body.toLowerCase().includes(searchTerm)) {
        return (
          <div key={question.question_id}><EachQuestion question={question} /></div>
          );
        }
      });
    setFoundQuestions(currentMatches);
  }

  function startSearch(e) {
    setSearchTerm(e.target.value.toLowerCase());
    if (searchTerm.length >= 2) {
      runSearch();
      setSearching(true);
    }
    if (searchTerm.length < 3) {
      setSearching(false);
    }
  }

  const defaultQuestions = questionArray.map((question, index) => {
    if (index <= arrayIndex) {
      return (
        <div key={question.question_id}><EachQuestion question={question} /></div>);
    }
  });

  return (
    <>
      <div>
        <input
          id="searchbar"
          type="text"
          placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
          onChange={startSearch}
        />
      </div>
      <div>
        {searching ? foundQuestions : defaultQuestions}
      </div>
    </>
  );
}

// {showMoreQuestions
//   ? defaultQuestions.map((question, index) => <EachQuestion key={index} question={question} />)
//   : questionArray.map((question, index) => <EachQuestion key={index} question={question} />)}
