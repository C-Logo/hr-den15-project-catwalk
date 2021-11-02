import React, { useState, useContext } from 'react';
import { ReviewContext } from './Review.jsx';

export default function ReviewBody(props) {
  const {
    review, reviewBodyShowMore, reviewBodyTrunc, setReviewBodyShowMore,
  } = useContext(ReviewContext);

  function clickHandler() {
    setReviewBodyShowMore(false);
  }

  console.log(reviewBodyShowMore);
  if (reviewBodyShowMore) {
    return (
      <div>
        {reviewBodyTrunc}
        <div className="reviewBodyShowMore">
          <button type="button" className="reviewBodyShowMoreButton" onClick={clickHandler}>Show more?</button>
        </div>
      </div>
    );
  }
  return (
    <div>
      {props.body}
    </div>
  );
}
