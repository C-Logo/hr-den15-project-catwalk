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
  const review = props;
  const reviewBodyTrunc = props.review.body;
  const [reviewBodyLength, setReviewBodyLength] = useState(50);
  const [reviewBodyShowMore, setReviewBodyShowMore] = useState(true);

  const { reviewSort } = useContext(ReviewsContext);

  useEffect(() => {
    if (props.review.body) {
      if (props.review.body.length < reviewBodyLength) {
        setReviewBodyShowMore(false);
      } else {
        reviewBodyTrunc = `${props.review.body.slice(0, reviewBodyLength)} ...`;
      }
    }
  }, []);

  return (
    <ReviewContext.Provider value={{
      review, reviewBodyShowMore, reviewBodyTrunc, setReviewBodyShowMore,
    }}
    >
      <div className="review">
        <div className="reviewFirstLine">
          <div className="Stars">
            <StarRating rating={props.review.rating} />
          </div>
          <div className="reviewerData">
            {`${props.review.reviewer_name}, ${dateReformat(props.review.date)}`}
          </div>
        </div>
        <div className="reviewSummary">
          {props.review.summary}
        </div>
        <div className="reviewBody">
          <ReviewBody body={review.body} />
        </div>
        <Recommended />
        <Response />
        <div className="reviewFooter">
          <ReviewFooter review={props.review} />
        </div>
        <hr />
      </div>
    </ReviewContext.Provider>
  );
}
