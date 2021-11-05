import React, { useContext, useState } from 'react';
import { QuestionContext } from './Questions.jsx';

export default function SearchQuestion() {
  const {
    searchQuery, setSearchQuery, questionArray, setQuestionArray,
  } = useContext(QuestionContext);
  const [input, setInput] = useState('');

  function searchedQuestion(input) {
    const filtered = questionArray.filter((question) => question.toLowerCase().includes(input.toLowerCase()));
    setInput(input);
    setQuestionArray(filtered);
  }

  return (
    <div>
      <input
        id="searchbar"
        type="text"
        placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
        value={input}
        onChange={searchedQuestion}
      />
      <button>Search</button>
    </div>
  );
}
