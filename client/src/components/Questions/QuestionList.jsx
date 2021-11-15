import React, { useState, useEffect, useContext } from 'react';
import { QuestionContext } from './Questions.jsx';
import EachQuestion from './EachQuestion.jsx';

export default function QuestionList(props) {
  const { questionArray, arrayIndex } = useContext(QuestionContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [searching, setSearching] = useState(false);
  const [foundQuestions, setFoundQuestions] = useState([]);

  function runSearch() {
    const currentMatches = questionArray.map((question, index) => {
      if (question.question_body.toLowerCase().includes(searchTerm)) {
        return (
          <div key={index}><EachQuestion question={question} /></div>
        );
      }
    });
    setFoundQuestions(currentMatches);
  }

  function startSearch(e) {
    setSearchTerm(e.target.value.toLowerCase());
    if (searchTerm.length < 3) {
      setSearching(false);
    }
    if (searchTerm.length > 2) {
      runSearch();
      setSearching(true);
    }
  }

  const defaultQuestions = questionArray.map((question, index) => {
    if (index <= arrayIndex) {
      return (
        <div key={index}>
          <div><EachQuestion question={question} /></div>
          <hr className="dotted" />
        </div>
      );
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
