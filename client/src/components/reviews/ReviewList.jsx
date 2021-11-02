import React, { useState, useEffect, useContext } from 'react';
import Review from './Review.jsx';
import { ReviewsContext } from './Reviews.jsx';

export default function ReviewList() {
  const { allReviews } = useContext(ReviewsContext);
  return (
    <div id="reviewList">
      {allReviews.map((review, index) => (
        <div key={index}>
          <Review review={review} />
        </div>
      ))}
    </div>
  );
}
