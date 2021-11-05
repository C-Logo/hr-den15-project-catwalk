import React, { useContext } from 'react';
import RatingBar from './RatingBar.jsx';
import { ReviewsContext } from './Reviews.jsx';

export default function RatingBars() {
  const { reviewRatings, totalRecs } = useContext(ReviewsContext);
  // create review array
  const ratingArray = [];
  const barColor = [
    '#f44336',
    '#ff9800',
    '#00bcd4',
    '#2196F3',
    '#04AA6D',
  ];
  // iterate through reviewObject
  let max = 0;
  for (let i = 5; i > 0; i--) {
    const ratingInformation = {
      stars: i,
      count: 0,
      barColor: barColor[i - 1],
    };
    if (reviewRatings[i]) {
      ratingInformation.count = reviewRatings[i];
      if (ratingInformation.count > max) {
        max = ratingInformation.count;
      }
    }
    ratingArray.push(ratingInformation);
  }

  return (
    <>
      {ratingArray.map((starRatingInfo, index) => (
        <RatingBar star={starRatingInfo} key={index} max={max} />
      ))}
    </>
  );
}
