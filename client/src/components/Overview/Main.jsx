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
  const [styleThumbnails, setStyleThumbnails] = useState();
  const [product, setProduct] = useState({});
  const [sizesAndQuantities, setSizesAndQuantities] = useState();

  const changeExtend = () => {
    setExtend(!extend);
  };

  const handleChangeStyle = (styleId, photo = 0) => {
    // console.log('styleId', styleId);
    setCurrentStyle(styleId);
    for (let i = 0; i < styles.length; i++) {
      if (styleId === styles[i].style_id) {
        setMainPhoto(styles[i].photos[photo].url);
        setStyleThumbnails(styles[i].photos);
        setCurrentStyle(styles[i]);
        const result = Object.values(currentStyle.skus);
        // console.log('result', result);
        setSizesAndQuantities(result);
        // console.log('currentStyle', currentStyle);
      }
    }
  };

  const getReq = (productId = 44388) => {
    axios
      .get(`/products/${productId}`)
      .then((response) => {
        setProduct({ ...product, ...response.data });
        return axios.get(`/products/${productId}/styles`);
      })
      .then((response) => {
        setStyles(response.data.results);
        setMainPhoto(response.data.results[0].photos[0].url);
        console.log(response.data.results[0]);
        handleChangeStyle(response.data.results[0]);
      })
      .catch((err) => {
        console.log('error on product get request:', err);
      });
  };

  useEffect(() => {
    getReq();
    // handleChangeStyle(266902);
  }, []);

  return (
    <ExtendUpdateContext.Provider
      value={{
        changeExtend,
        extend,
        product,
        styles,
        mainPhoto,
        currentStyle,
        handleChangeStyle,
        styleThumbnails,
        sizesAndQuantities,
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
