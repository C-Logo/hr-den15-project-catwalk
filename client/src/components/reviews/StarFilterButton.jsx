import React, { useContext } from 'react';
import { ReviewsContext } from './Reviews.jsx';

export default function StarFilterButton() {
  const { ratingSort, setRatingSort } = useContext(ReviewsContext);
  function cancelStarFilter(e) {
    const tempArray = [...ratingSort];
    tempArray.splice(ratingSort.indexOf(Number(e.target.name)), 1);
    setRatingSort(tempArray);
  }

  if (ratingSort.length !== 0) {
    return (
      <>
        {ratingSort.map((rating, index) => (
          <div className="starFilterButtonText" key={index}>
            <button type="button" name={rating} className="starFilterButton" onClick={cancelStarFilter}>X</button>
            {` ${rating} stars`}
          </div>
        ))}
      </>
    );
  }
  return (<></>);
}
