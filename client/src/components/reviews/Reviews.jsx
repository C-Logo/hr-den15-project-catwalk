import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';

export default function Reviews() {
  // declare state variables here
  // example: const [count, setCount] = useState(0);

  const [allReviews, setAllReviews] = useState([]);

  // function fetchAllReviews() {
  //   axios
  //     .get('/reviews')
  //     .then((err, data) => {
  //       if (err) {
  //         throw err;
  //       } else {
  //         setAllReviews(data);
  //       }
  //     })
  //     .then(() => {
  //       console.log(allReviews);
  //     })
  //     .catch((err) => {
  //       throw err;
  //     });
  // }

  useEffect(() => {
    // fetchAllReviews();
  });

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
        <div id="reviewList">
          <div className="review">
            <div className="reviewStars">
              5 star graph
            </div>
            <div className="reviewerData">
              User1234, January 1, 2019
            </div>
            <div className="reviewSummary">
              Review title with word-break truncatino to prevent wrapping onto the next...
            </div>
            <div className="reviewBody">
              ...line, if necessary. Donut gummi bears gingerbread gummies chocolate.
              ice cream applie pie tiramisu
              fruitcake chupa chups icing apple pie. lemon drops cake pudding pudding.
            </div>
            <div className="reviewRecommendation">
              I recommend this product
            </div>
            <div className="reviewResponse">
              <div className="reviewResponseTitle">
                Response:
              </div>
              <div className="reviewResponseBody">
                Marzipan danish jelly beans gummi bears applie pie cheesecake
                topping biscuit sesame snaps.
              </div>
            </div>
            <div className="reviewFooter">
              <div className="reviewHelpful">
                Helpful? Yes (9)
              </div>
              <div className="reviewReport">
                Report
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
