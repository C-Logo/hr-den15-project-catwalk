import React, { useContext } from 'react';
import { ReviewContext } from './Review.jsx';

export default function Recommended() {
  const review = useContext(ReviewContext);
  if (review.recommend) {
    return (
      <div className="reviewRecommendation">
        I recommend this product!
      </div>
    );
  }
  return (
    <div />
  );
}
