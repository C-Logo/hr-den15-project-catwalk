import React, { useContext } from 'react';
import { ExtendUpdateContext } from './Main.jsx';

export default function Description() {
  const { product } = useContext(ExtendUpdateContext);

  return (
    <div className="overview-information overview-flex">
      <div className="overview-description">
        <div className="overview-slogan">{product.slogan}</div>
        <div className="overview-description-text">{product.description}</div>
      </div>
      <div className="overview-features">
        {product.features
          ? product.features.map((item, index) => (
            <div key={index}>
              &#x2713;
              {item.feature}
              {' '}
              -
              {' '}
              {item.value}
            </div>
          ))
          : <div>empty</div>}
      </div>
    </div>
  );
}
