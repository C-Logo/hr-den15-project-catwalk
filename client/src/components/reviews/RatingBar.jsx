import React, { useContext } from 'react';
import { ReviewsContext } from './Reviews.jsx';

export default function RatingBar(props) {
  const { ratingSortClickHandler } = useContext(ReviewsContext);
  const barStyle = {
    width: `${props.star.width * 100}%`,
    height: '18px',
    backgroundColor: props.star.barColor,
  };
  return (
    <div className="individualBarCharts">
      <div className="starCount">
        <div id={`${props.star.stars}`} onClick={ratingSortClickHandler}>{`${props.star.stars} stars`}</div>
      </div>
      <div className="starBarChart">
        <div className="bar-container">
          <div style={barStyle} />
        </div>
      </div>
      <div className="starRatingCount">
        <div>{props.star.count}</div>
      </div>
    </div>
  );
}

{ /*
<div id="starBarChart">
  <div class="side"> --> side = starCount
    <div>5 star</div>
  </div>
  <div class="middle">
    <div class="bar-container">
      <div class="bar-5"></div>
    </div>
  </div>
  <div class="side right"> --> starRatingCount
    <div>150</div>
  </div>
</div>
*/ }
