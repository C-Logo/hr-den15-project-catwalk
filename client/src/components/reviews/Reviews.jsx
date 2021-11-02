import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import ReviewList from './ReviewList.jsx';
import StarRating from '../StarRating.jsx';
import RatingBar from './RatingBar.jsx';

export const ReviewsContext = React.createContext();

export default function Reviews() {
  // declare state variables here
  // example: const [count, setCount] = useState(0);

  const [allReviews, setAllReviews] = useState([]);
  const [reviewCount, setReviewCount] = useState(2);
  const [reviewSort, setReviewSort] = useState('relevant');

  function fetchAllReviews() {
    // '/reviews/meta?product_id=44388'
    axios
      .get(`/reviews?sort=${reviewSort}&count=${reviewCount}&product_id=44388`)
      .then((data) => {
        setAllReviews(data.data.results);
      })
      .catch((err) => {
        throw err;
      });
  }

  function fetchTestData() {
    axios
      .get('/reviews?sort=relevant&count=2&product_id=44388')
      .then((data) => {
        console.log('test data: ');
        console.log(data);
      });
  }

  useEffect(() => {
    fetchAllReviews();
    // fetchTestData();
  }, [reviewCount]);

  return (
    <>
      <h1 id="reviewTitle">Ratings and Reviews</h1>

      <div id="reviews">
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
            <RatingBar />
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
          <div id="reviewInfoContainer">
            <div id="reviewsFilter">
              248 reviews, sorted by relevance
            </div>
            <hr />
            <ReviewsContext.Provider value={{ allReviews }}>
              <ReviewList />
            </ReviewsContext.Provider>
            <form>
              <button type="button" onClick={() => { setReviewCount(reviewCount + 2); }}>Show More!</button>
              <button type="button">Add a Review +</button>
            </form>
          </div>
        </div>

      </div>
    </>
  );
}
