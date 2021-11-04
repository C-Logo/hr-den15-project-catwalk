import React, { useState, useEffect, useContext } from 'react';
import dateReformat from '../../helper-functions/dateReformat.js';
import Response from './Response.jsx';
import Recommended from './Recommended.jsx';
import StarRating from '../StarRating.jsx';
import ReviewBody from './ReviewBody.jsx';
import ReviewFooter from './ReviewFooter.jsx';
import { ReviewsContext } from './Reviews.jsx';

export const ReviewContext = React.createContext();

export default function Review(props) {
  const [review, setReview] = useState({});
  const [reviewBodyTrunc, setReviewBodyTrunc] = useState(review.body);
  const [reviewBodyLength, setReviewBodyLength] = useState(50);
  const [reviewBodyShowMore, setReviewBodyShowMore] = useState(true);

  const { reviewSort, allReviews } = useContext(ReviewsContext);

  useEffect(() => {
    setReviewBodyShowMore(true);
    setReview(props.review);
    if (props.review.body) {
      if (props.review.body.length < reviewBodyLength) {
        setReviewBodyShowMore(false);
        setReviewBodyTrunc(props.review.body);
      } else {
        setReviewBodyTrunc(`${props.review.body.slice(0, reviewBodyLength)} ...`);
      }
    }
  }, [allReviews]);

  return (
    <ReviewContext.Provider value={{
      review, reviewBodyShowMore, reviewBodyTrunc, setReviewBodyShowMore,
    }}
    >
      <div className="review">
        <div className="reviewTop">
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
        </div>
        <div className="reviewFooter">
          <ReviewFooter review={review} />
          <hr />
        </div>
      </div>
    </ReviewContext.Provider>
  );
}
