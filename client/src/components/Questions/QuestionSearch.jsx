import React, { useContext } from 'react';
import { QuestionContext } from './Questions.jsx';

export default function SearchQuestion() {
  const { searchQuery, setSearchQuery } = useContext(QuestionContext);
  return (
    <div>
      <input
        id="searchbar"
        type="text"
        placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button>Search</button>
    </div>
  );
}
