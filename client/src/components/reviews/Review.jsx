import React, { useState, useEffect } from 'react';
import dateReformat from '../../helper-functions/dateReformat.js';
import Response from './Response.jsx';
import Recommended from './Recommended.jsx';
import StarRating from '../StarRating.jsx';

export const ReviewContext = React.createContext();

export default function Review(props) {
  const [review, setReview] = useState({});

  useEffect(() => {
    setReview(props.review);
  }, []);

  return (
    <div id="reviewList">
      <div className="review">
        <div className="reviewFirstLine">
          <div className="Stars">
            <StarRating rating={review.rating} />
            {/* {starRatingFunction(review.rating)} */}
          </div>
          <div className="reviewerData">
            {`${review.reviewer_name}, ${dateReformat(review.date)}`}
          </div>
        </div>
        <div className="reviewSummary">
          {review.summary}
        </div>
        <div className="reviewBody">
          {review.body}
        </div>
        <ReviewContext.Provider value={review}>
          <Recommended />
        </ReviewContext.Provider>
        <ReviewContext.Provider value={review}>
          <Response />
        </ReviewContext.Provider>
        <div className="reviewFooter">
          <div className="reviewHelpful">
            Helpful? Yes (9)
          </div>
          <div className="reviewFooterSeparator">
            |
          </div>
          <div className="reviewReport">
            Report
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
}
