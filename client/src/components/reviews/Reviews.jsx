import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import ReviewList from './ReviewList.jsx';
import StarRating from '../StarRating.jsx';
import RatingBar from './RatingBar.jsx';
import Review from './Review.jsx';

export const ReviewsContext = React.createContext();

export default function Reviews(props) {
  // declare state variables here
  // example: const [count, setCount] = useState(0);

  const [allReviews, setAllReviews] = useState([]);
  const [reviewCount, setReviewCount] = useState(2);
  const [reviewSort, setReviewSort] = useState('relevant');
  const [moreReviews, setMoreReviews] = useState({ pointerEvents: 'auto' });
  const [totalReviews, setTotalReviews] = useState(0);
  let shownReviews = allReviews.slice(0, reviewCount);

  function fetchAllReviews() {
    axios
      .get(`/reviews?sort=${reviewSort}&count=10000&product_id=44388`)
      .then((data) => {
        setAllReviews(data.data.results);
        setTotalReviews(data.data.results.length);
        shownReviews = allReviews.slice(0, reviewCount - 1);
      })
      .catch((err) => {
        throw err;
      });
  }

  function markAsHelpful(reviewId) {
    axios
      .put(`/reviews/${reviewId}/helpful`)
      .then((data) => {
        console.log('coming through?');
        console.log(data);
      })
      .catch((err) => {
        throw err;
      });
  }

  function fetchTestData() {
    axios
      .get(`/reviews?sort=${reviewSort}&count=${reviewCount}&product_id=44388`)
      .then((data) => {
        console.log('test data: ');
        console.log(data);
      });
  }

  function sortClickHandler(e) {
    setReviewSort(e.target.value);
  }

  useEffect(() => {
    fetchAllReviews();
    // fetchTestData();
  }, [reviewCount, reviewSort]);

  return (
    <div onClick={(e) => { props.interactionHandler(e, 'Ratings and Reviews'); }}>
      <h1 id="reviewTitle">Ratings and Reviews</h1>

      <div id="reviews" title="Ratings and Reviews">
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
              {`${totalReviews} reviews, sorted by:`}
              <select id="reviewSortingSelect" onClick={sortClickHandler}>
                <option value="relevant">Relevant</option>
                <option value="helpful">Helpful</option>
                <option value="newest">Newest</option>
              </select>
            </div>
            <hr />
            <ReviewsContext.Provider value={{ allReviews, markAsHelpful, reviewSort }}>
              <div id="reviewList">
                {shownReviews.map((review, index) => (
                  <div key={index}>
                    <Review review={review} />
                  </div>
                ))}
              </div>
            </ReviewsContext.Provider>
            <form>
              <button
                type="button"
                style={moreReviews}
                onClick={() => {
                  setReviewCount(reviewCount + 2);
                  shownReviews = allReviews.slice(0, reviewCount);
                }}
              >
                Show More!

              </button>
              <button type="button">Add a Review +</button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}
