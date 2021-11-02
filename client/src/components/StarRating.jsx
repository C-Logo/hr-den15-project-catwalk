import React from 'react';

export default function StarRating(props) {
  return (
    <div className="Stars">
      {`${props.rating} Stars`}
    </div>
  );
}

// style={`--rating: ${props.rating};`}
