import axios from 'axios';
import React, { useState, useContext, useEffect } from 'react';
import Image from './Image.jsx';
import RightColumn from './RightColumn.jsx';

export const ExtendUpdateContext = React.createContext();

export default function Main() {
  const [extend, setExtend] = useState(false);
  const [styles, setStyles] = useState([]);
  const [mainPhoto, setMainPhoto] = useState('');
  const [currentStyle, setCurrentStyle] = useState(0);
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
    // console.log(productId);
    axios
      .get(`/products/${productId}`)
      .then((response) => {
        setProduct({ ...product, ...response.data });
        // console.log(product);
        // console.log(response.data);
        return axios.get(`/products/${productId}/styles`);
      })
      .then((response) => {
        console.log('result styles:', response.data.results);
        setStyles(response.data.results);
        // console.log('image-', response.data.results[0].photos[0].url);
        setMainPhoto(response.data.results[0].photos[0].url);
        handleChangeStyle(response.data.results[0].style_id);
      })
      .catch((err) => {
        console.log('error on product get request:', err);
      });
  };

  const handleChangeStyle = (styleId) => {
    setCurrentStyle(styleId);
  };

  useEffect(() => {
    getReq();
    setMainPhoto();
  }, []);

  return (
    <ExtendUpdateContext.Provider value={{
      changeExtend, extend, product, styles, mainPhoto, currentStyle, handleChangeStyle,
    }}
    >
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
