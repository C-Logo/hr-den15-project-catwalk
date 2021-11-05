import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import StarRating from '../StarRating.jsx';
import RatingBars from './RatingBars.jsx';
import Review from './Review.jsx';

export const ReviewsContext = React.createContext();

export default function Reviews(props) {
  // declare state variables here
  // example: const [count, setCount] = useState(0);

  const [allReviews, setAllReviews] = useState([]);
  const [totalReviews, setTotalReviews] = useState(3);
  const [reviewCount, setReviewCount] = useState(2);
  const [reviewSort, setReviewSort] = useState('relevant');
  const [moreReviews, setMoreReviews] = useState({ pointerEvents: 'auto' });
  const [reviewRatings, setReviewRatings] = useState({});
  const [reviewRecommendation, setReviewRecommendation] = useState(0);
  const [totalRecs, setTotalRecs] = useState(0);
  const [averageStars, setAverageStars] = useState(0);
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
    axios
      .get('/reviews/meta?product_id=44388')
      .then((data) => {
        console.log(data.data);
        setReviewRatings(data.data.ratings);
        const falseRecs = Number(data.data.recommended.false);
        const trueRecs = Number(data.data.recommended.true);
        const percentRec = trueRecs / (trueRecs + falseRecs);
        setReviewRecommendation(Math.floor(percentRec * 100));
        setTotalRecs(falseRecs + trueRecs);
        const results = data.data.ratings;
        const resultsKeys = Object.keys(results);
        let weightedAvg = 0;
        // iterate over results.keys
        for (let i = 0; i < resultsKeys.length; i++) {
          weightedAvg += resultsKeys[i] * Number(results[resultsKeys[i]]);
        }
        setAverageStars(Math.round(weightedAvg / (trueRecs + falseRecs) * 10) / 10);
      });
  }

  function fetchTestData() {
    axios
      .get('/reviews/meta?product_id=44388')
      .then((data) => {
        console.log('test data: ');
        console.log(data.data);
      });
  }

  function sortClickHandler(e) {
    setReviewSort(e.target.value);
  }

  useEffect(() => {
    fetchAllReviews();
    // fetchTestData();
    if (reviewCount >= totalReviews) {
      console.log(totalReviews);
      setMoreReviews({ display: 'none' });
    }
  }, [reviewCount, reviewSort]);

  return (
    <div onClick={(e) => { props.interactionHandler(e, 'Ratings and Reviews'); }}>
      <ReviewsContext.Provider value={{
        allReviews, reviewSort, reviewRatings, totalRecs, averageStars,
      }}
      >
        <h1 id="reviewTitle">Ratings and Reviews</h1>

        <div id="reviews" title="Ratings and Reviews">
          <div id="reviewsLeft">
            <div id="reviewProductStars">
              <div id="reviewsStarAverage">
                {averageStars}
              </div>
              <div id="starGraph">
                <StarRating />
              </div>
            </div>
            <div id="recommendationPercentage">
              {`${reviewRecommendation}% of reviews recommend this product`}
            </div>
            <div id="starBarChart">
              <RatingBars />
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
              <div id="reviewList">
                {shownReviews.map((review, index) => (
                  <Review review={review} key={index} />
                ))}
              </div>
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
      </ReviewsContext.Provider>
    </div>
  );
}
