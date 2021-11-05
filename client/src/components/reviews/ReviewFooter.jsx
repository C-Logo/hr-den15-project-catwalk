import React, { useContext } from 'react';
import { ReviewContext } from './Review.jsx';
import { ReviewsContext } from './Reviews.jsx';

export default function ReviewFooter() {
  const { markAsHelpful, reviewHelpful, review } = useContext(ReviewContext);
  const { reportReviewHandler } = useContext(ReviewsContext);
  return (
    <div className="reviewFooterInformation">
      <div className="reviewHelpful">
        Helpful?
      </div>
      <button type="button" className="reviewFooterYes" onClick={() => { markAsHelpful(review.review_id); }}>Yes</button>
      <div className="reviewFooterSeparator">
        {`(${reviewHelpful})`}
      </div>
      <div className="reviewFooterSeparator">
        |
      </div>
      <button type="button" className="reviewFooterYes" onClick={() => { reportReviewHandler(review.review_id); }}>Report</button>
    </div>
  );
}
