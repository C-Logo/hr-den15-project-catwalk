import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import StarRating from '../StarRating.jsx';
import RatingBars from './RatingBars.jsx';
import Review from './Review.jsx';
import { AppContext } from '../App.jsx';
import CharacteristicBars from './CharacteristicBars.jsx';
import StarFilterButton from './StarFilterButton.jsx';
import ModalSetUp from './ModelSetUp.jsx';

export const ReviewsContext = React.createContext();

export default function Reviews(props) {
  // declare state variables here
  // example: const [count, setCount] = useState(0);
  const { averageStars, setAverageStars } = useContext(AppContext);

  const [allReviews, setAllReviews] = useState([]);
  const [totalReviews, setTotalReviews] = useState(3);
  const [reviewCount, setReviewCount] = useState(2);
  const [reviewSort, setReviewSort] = useState('relevant');
  const [moreReviews, setMoreReviews] = useState({ pointerEvents: 'auto' });
  const [reviewRatings, setReviewRatings] = useState({});
  const [reviewRecommendation, setReviewRecommendation] = useState(0);
  const [totalRecs, setTotalRecs] = useState(0);
  const [reviewReported, setReviewReported] = useState(false);
  const [shownReviews, setShownReviews] = useState(allReviews.slice(0, reviewCount));
  const [ratingFilteredReviews, setRatingFilteredReviews] = useState([]);
  const [ratingSort, setRatingSort] = useState([]);
  const [ratingCharacteristics, setRatingCharacteristics] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [productId, setProductId] = useState('44388');

  function fetchAllReviews() {
    axios
      .get(`/reviews?sort=${reviewSort}&count=10000&product_id=44388`)
      .then((data) => {
        setAllReviews(data.data.results);
        // console.log(data.data.results);
        // debugger;
        if (ratingSort.length === 0) {
          setRatingFilteredReviews(data.data.results);
          setShownReviews(data.data.results.slice(0, reviewCount));
          setTotalReviews(data.data.results.length);
        } else {
          const filteredReviews = [];
          for (let i = 0; i < data.data.results.length; i++) {
            // console.log(Number(data.data.results[i].rating));
            if (ratingSort.includes(Number(data.data.results[i].rating))) {
              filteredReviews.push(data.data.results[i]);
            }
          }
          setRatingFilteredReviews(filteredReviews);
          setShownReviews(filteredReviews.slice(0, reviewCount));
          setTotalReviews(filteredReviews.length);
        }
      })
      .catch((err) => {
        throw err;
      });
    axios
      .get('/reviews/meta?product_id=44388')
      .then((data) => {
        setRatingCharacteristics(data.data.characteristics);
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
    console.log('test data: ');
    for (let i = 44388; i < 44393; i++) {
      axios
        .get(`/reviews/meta?product_id=${i}`)
        .then((data) => {
          console.log(data.data.characteristics);
        });
    }
  }

  function reportReviewHandler(reviewId) {
    // put request
    axios
      .put(`/reviews/${reviewId}/report`)
      .then(() => {
        // set reviewReported to true
        setReviewReported(true);
        setReviewReported(false);
      })
      .catch((err) => {
        console.error(err);
        throw err;
      });
  }

  function sortClickHandler(e) {
    setReviewSort(e.target.value);
  }

  function ratingSortClickHandler(e) {
    if (!ratingSort.includes(Number(e.target.id))) {
      setRatingSort([...ratingSort, Number(e.target.id)]);
    }
  }

  useEffect(() => {
    fetchAllReviews();
    // fetchTestData();
    // debugger;
    if (reviewCount >= totalReviews) {
      setMoreReviews({ display: 'none' });
    } else if (reviewCount < totalReviews) {
      setMoreReviews({ pointerEvents: 'auto' });
    }
  }, [reviewCount, reviewSort, reviewReported, ratingSort, totalReviews, showModal]);

  return (
    <div onClick={(e) => { props.interactionHandler(e, 'Ratings and Reviews'); }} id="ratingsAndReviews">
      <ReviewsContext.Provider value={{
        allReviews,
        reviewSort,
        reviewRatings,
        totalRecs,
        averageStars,
        reviewReported,
        reportReviewHandler,
        ratingSortClickHandler,
        ratingSort,
        ratingFilteredReviews,
        shownReviews,
        ratingCharacteristics,
        setRatingSort,
        showModal,
        setShowModal,
        productId,
      }}
      >
        <h1 id="reviewTitle">Ratings and Reviews</h1>

        <div id="reviews">
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
              <CharacteristicBars />
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
                <StarFilterButton />
              </div>
              <hr />
              <div id="reviewList">
                {shownReviews.map((review, index) => (
                  <Review review={review} key={index} />
                ))}
              </div>
              <form>
                <ModalSetUp />
                <button
                  type="button"
                  style={moreReviews}
                  onClick={() => {
                    setReviewCount(reviewCount + 2);
                    setShownReviews(allReviews.slice(0, reviewCount));
                  }}
                >
                  Show More!
                </button>
                <button type="button" onClick={() => { setShowModal(!showModal); }}>Add a Review +</button>
              </form>
            </div>
          </div>

        </div>
      </ReviewsContext.Provider>
    </div>
  );
}
