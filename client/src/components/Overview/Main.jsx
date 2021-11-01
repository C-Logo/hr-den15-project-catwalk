import axios from 'axios';
import React, { useState, useContext, useEffect } from 'react';
import Image from './Image.jsx';
import RightColumn from './RightColumn.jsx';

export const ExtendUpdateContext = React.createContext();

export default function Main() {
  const [extend, setExtend] = useState(false);
  const [product, setProduct] = useState({
    campus: '',
    category: '',
    created_at: '',
    default_price: '',
    description: '',
    features: [],
    id: 44388,
    name: '',
    slogan: '',
    updated_at: '',
  });
  // const [changeExtend, setChangeExtend] = useState(setExtend(!extend));

  const changeExtend = () => {
    setExtend(!extend);
  };

  const getReq = (productId = 44388) => {
    console.log(productId);
    axios
      .get(`/products/${productId}`)
      .then((results) => {
        setProduct({ ...product, ...results.data });
        console.log(product);
        console.log(results.data);
      })
      .catch((err) => {
        console.log('error on product get request:', err);
      });
  };

  useEffect(() => {
    getReq();
  }, []);

  return (
    <ExtendUpdateContext.Provider value={{ changeExtend, extend, product }}>
      <div>
        <div className="overview-main">
          <Image click={setExtend} extend={extend} />
          {extend ? '' : <RightColumn />}
        </div>
        <div className="overview-information">
          {' '}
          Product Information:
          {' '}
          {product.description}
          {' '}
        </div>
      </div>
    </ExtendUpdateContext.Provider>
  );
}
