import React, { useState, useEffect, useContext } from 'react';

export default function Review() {
  return (
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
  );
}
