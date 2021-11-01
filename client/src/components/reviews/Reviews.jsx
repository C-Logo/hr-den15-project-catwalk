import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import ReviewList from './ReviewList.jsx';

const ReviewsContext = React.createContext(Reviews);

export default function Reviews() {
  // declare state variables here
  // example: const [count, setCount] = useState(0);

  const [allReviews, setAllReviews] = useState([]);
  const [starRating, setStarRating] = useState('');

  function fetchAllReviews() {
    // '/reviews/meta?product_id=44388'
    axios
      .get('/reviews?product_id=44388')
      .then((data) => {
        console.log(data);
        setAllReviews(data.data.results);
      })
      .catch((err) => {
        throw err;
      });
  }

  useEffect(() => {
    fetchAllReviews();
  }, []);

  return (
    <div id="reviews">

      <h1 id="reviewTitle">Ratings and Reviews</h1>

      <div id="reviewsLeft">
        <div id="reviewProductStars">
          <div id="reviewsStarAverage">
            3.5
          </div>
          <div id="starGraph">
            5 stars graph
          </div>
        </div>
        <div id="recommendationPercentage">
          100% of reviews recommend this product
        </div>
        <div id="starBarChart">
          <div className="starBarChartContainer">
            <div className="starCount">
              5 stars
            </div>
            <div className="starBarChart">
              BAR CHART
            </div>
          </div>
          <div className="starBarChartContainer">
            <div className="starCount">
              4 stars
            </div>
            <div className="starBarChart">
              BAR CHART
            </div>
          </div>
          <div className="starBarChartContainer">
            <div className="starCount">
              3 stars
            </div>
            <div className="starBarChart">
              BAR CHART
            </div>
          </div>
          <div className="starBarChartContainer">
            <div className="starCount">
              2 stars
            </div>
            <div className="starBarChart">
              BAR CHART
            </div>
          </div>
          <div className="starBarChartContainer">
            <div className="starCount">
              1 stars
            </div>
            <div className="starBarChart">
              BAR CHART
            </div>
          </div>
        </div>
        <div id="reviewsBreakdown">
          <div className="breakdownTitle">
            Size
          </div>
          <div className="breakdownGraph">
            graph thing
          </div>
          <div className="breakdownAxis">
            Too Small
            Perfect
            Too Large
          </div>
        </div>
      </div>

      <div id="reviewsRight">
        <div id="reviewsFilter">
          248 reviews, sorted by relevance
        </div>
        <ReviewsContext.Provider>
          <ReviewList />
        </ReviewsContext.Provider>
      </div>

    </div>
  );
}
