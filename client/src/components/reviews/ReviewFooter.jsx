import React, { useContext } from 'react';
import { ReviewsContext } from './Reviews.jsx';

export default function ReviewFooter(props) {
  const { markAsHelpful } = useContext(ReviewsContext);
  return (
    <>
      <div className="reviewHelpful">
        Helpful?
      </div>
      <div className="reviewFooterSeparator" onClick={() => { markAsHelpful(props.review.review_id); }}>
        Yes
      </div>
      <div className="reviewFooterSeparator">
        {`(${props.review.helpfulness})`}
      </div>
      <div className="reviewFooterSeparator">
        |
      </div>
      <div className="reviewReport">
        Report
      </div>
    </>
  );
}
