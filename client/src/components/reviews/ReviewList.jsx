import React, { useState, useEffect, useContext } from 'react';
import Review from './Review.jsx';
import { ReviewsContext } from './Reviews.jsx';

export default function ReviewList() {
  const allReviews = useContext(ReviewsContext);
  return allReviews.map((review) => <Review review={review} />);
}
