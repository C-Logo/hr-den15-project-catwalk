import React, { useContext } from 'react';
import { ReviewContext } from './Review.jsx';

export default function ReviewFooter() {
  const { markAsHelpful, reviewHelpful, review } = useContext(ReviewContext);
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
      <div className="reviewReport">
        Report
      </div>
    </div>
  );
}
