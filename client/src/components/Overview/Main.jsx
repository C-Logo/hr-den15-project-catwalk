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

  const changeExtend = () => {
    setExtend(!extend);
  };

  const handleChangeStyle = (styleId, photo = 0) => {
    // console.log('new Style:', styleId, styles);
    setCurrentStyle(styleId);
    for (let i = 0; i < styles.length; i++) {
      if (styleId === styles[i].style_id) {
        // console.log('yes', i);
        setMainPhoto(styles[i].photos[photo].url);
        setStyleThumbnails(styles[i].photos);
        setCurrentStyle(styles[i]);
        const style = styles;
        setStyles([]);
        setStyles(style);
      }
    }
  };

  const getReq = (productId = 44388) => {
    axios
      .get(`/products/${productId}`)
      .then((response) => {
        setProduct({ ...product, ...response.data });
        // console.log(product);
        // console.log(response.data);
        return axios.get(`/products/${productId}/styles`);
      })
      .then((response) => {
        // console.log('result styles:', response.data.results);
        setStyles(response.data.results);
        // console.log('image-', response.data.results[0].photos[0].url);
        setMainPhoto(response.data.results[0].photos[0].url);
        handleChangeStyle(response.data.results[0]);
      })
      .catch((err) => {
        console.log('error on product get request:', err);
      });
  };

  useEffect(() => {
    getReq();
    // setMainPhoto();
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
