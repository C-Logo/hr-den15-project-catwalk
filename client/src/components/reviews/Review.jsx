import React, { useState, useEffect } from 'react';
import dateReformat from '../../helper-functions/dateReformat.js';
import Response from './Response.jsx';
import Recommended from './Recommended.jsx';
import StarRating from '../StarRating.jsx';
import ReviewBody from './ReviewBody.jsx';

export const ReviewContext = React.createContext();

export default function Review(props) {
  const [review, setReview] = useState(props.review);
  const [reviewBodyTrunc, setReviewBodyTrunc] = useState(review.body);
  const [reviewBodyLength, setReviewBodyLength] = useState(50);
  const [reviewBodyShowMore, setReviewBodyShowMore] = useState(true);

  useEffect(() => {
    console.log(review);
    if (review.body) {
      if (review.body.length < reviewBodyLength) {
        setReviewBodyShowMore(false);
      } else {
        setReviewBodyTrunc(`${review.body.slice(0, reviewBodyLength)} ...`);
      }
    }
  }, [reviewBodyShowMore]);

  return (
    <ReviewContext.Provider value={{
      review, reviewBodyShowMore, reviewBodyTrunc, setReviewBodyShowMore,
    }}
    >
      <div className="review">
        <div className="reviewFirstLine">
          <div className="Stars">
            <StarRating rating={review.rating} />
          </div>
          <div className="reviewerData">
            {`${review.reviewer_name}, ${dateReformat(review.date)}`}
          </div>
        </div>
        <div className="reviewSummary">
          {review.summary}
        </div>
        <div className="reviewBody">
          <ReviewBody />
        </div>
        <Recommended />
        <Response />
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
    </ReviewContext.Provider>
  );
}
