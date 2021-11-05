import React, { useContext } from 'react';
import { ReviewsContext } from './Reviews.jsx';

export default function StarFilterButton() {
  const { ratingSort, setRatingSort } = useContext(ReviewsContext);
  function cancelStarFilter(e) {
    setRatingSort(0);
  }

  if (ratingSort !== 0) {
    return (
      <div id={ratingSort}>
        <button type="button" className="starFilterButton" onClick={cancelStarFilter}>X</button>
        {` ${ratingSort} stars`}
      </div>
    );
  }
  return (<></>);
}
