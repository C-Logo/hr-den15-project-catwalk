import axios from 'axios';
import React, { useState, useContext, useEffect } from 'react';
import Image from './Image.jsx';
import RightColumn from './RightColumn.jsx';
import Description from './Description.jsx';

export const ExtendUpdateContext = React.createContext();

export default function Main() {
  const [extend, setExtend] = useState(false);
  const [styles, setStyles] = useState([]);
  const [mainPhoto, setMainPhoto] = useState('');
  const [currentStyle, setCurrentStyle] = useState(0);
  const [styleThumbnails, setStyleThumbnails] = useState();
  const [product, setProduct] = useState({});
  const [sizesAndQuantities, setSizesAndQuantities] = useState();
  const [purchaseOptions, setPurchaseOptions] = useState({});
  const [imageZoomed, setImageZoomed] = useState(false);

  const changeExtend = () => {
    setExtend(!extend);
  };

  const changeZoomed = () => {
    setImageZoomed(!imageZoomed);
  };

  const handleChangePurchaseOptions = (sizeSelected, qtySelected, index, itemSku) => {
    // console.log('>>', Object.keys(currentStyle.skus)[itemSku], itemSku);
    if (sizeSelected) {
      setPurchaseOptions({
        ...purchaseOptions,
        size: sizeSelected,
        sku: Object.keys(currentStyle.skus)[itemSku],
      });
      setCurrentStyle({
        ...currentStyle,
        sizeSelected: [...Array(Math.min(sizesAndQuantities[index].quantity + 1, 16)).keys()],
      });
    }
    if (qtySelected) {
      setPurchaseOptions({ ...purchaseOptions, quantity: qtySelected });
    }
    // console.log(purchaseOptions);
  };

  const handleChangeStyle = (styleId, photo = 0) => {
    // console.log('styleId', styleId, typeof styleId);
    // setCurrentStyle(styleId);
    // I should be able to take out this for loop for most of the times I am calling this function
    for (let i = 0; i < styles.length; i++) {
      if (styleId === styles[i].style_id) {
        setStyleThumbnails(styles[i].photos);
        setMainPhoto(styles[i].photos[photo].url);
        setCurrentStyle({ ...styles[i], photoIndex: photo });
        setPurchaseOptions({}); // empty puchaseOptions
        const result = Object.values(currentStyle.skus);
        // console.log('result', result);
        setSizesAndQuantities(result);
        // console.log('currentStyle', currentStyle);
        // console.log('currentproduct', product);
      }
    }
  };

  const getReq = (productId = 44388) => {
    axios
      .get(`/products/${productId}`)
      .then((response) => {
        setProduct({ ...product, ...response.data });
        console.log('response1', response);
        return axios.get(`/products/${productId}/styles`);
      })
      .then((response) => {
        console.log('response.data.results =', response);
        setStyles(response.data.results);
        setCurrentStyle(response.data.results[0]);
        setMainPhoto(response.data.results[0].photos[0].url);
        setStyleThumbnails(response.data.results[0].photos);
        handleChangeStyle(266902);
      })
      .catch((err) => {
        console.log('error on product get request:', err);
      });
  };

  useEffect(() => {
    // useParams(productId)
    getReq();
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
        handleChangePurchaseOptions,
        purchaseOptions,
        imageZoomed,
        changeZoomed,
      }}
    >
      <div>
        <div className="overview-main">
          <Image />
          {extend ? '' : <RightColumn />}
        </div>
        <Description />
      </div>
    </ExtendUpdateContext.Provider>
  );
}
