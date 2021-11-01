import React, { useContext, useEffect, useState } from 'react';
import { ReviewContext } from './Review.jsx';

export default function Response() {
  const review = useContext(ReviewContext);

  if (review.response) {
    return (
      <div className="reviewResponse">
        <div className="reviewResponseTitle">
          Response:
        </div>
        <div className="reviewResponseBody">
          {review.response}
        </div>
      </div>
    );
  }
  return (
    <div />
  );
}
