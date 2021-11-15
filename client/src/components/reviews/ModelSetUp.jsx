import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Modal from '../Modal.jsx';
import { ReviewsContext } from './Reviews.jsx';
import StarRating from '../StarRating.jsx';
import RMDescTable from './utility functions/RMDescTable.jsx';

export const ModalSetUpContext = React.createContext();

export default function ModalSetUp() {
  const {
    showModal, setShowModal, ratingCharacteristics, productId,
  } = useContext(ReviewsContext);
  const [rmStarRating, setrmStarRating] = useState(0);
  const [rmStarRatingCom, setrmStarRatingCom] = useState(true);
  const [rmStarText, setrmStarText] = useState('"Choose your rating!"');
  const [rmRec, setrmRec] = useState(null);
  const [rmRecCom, setrmRecCom] = useState(true);
  const [rmSummary, setrmSummary] = useState('');
  const [rmSummaryCom, setrmSummaryCom] = useState(true);
  const [rmBody, setrmBody] = useState('');
  const [rmBodyCom, setrmBodyCom] = useState(true);
  const [rmPhotoUrl, setrmPhotoUrl] = useState('');
  const [rmPhotoUrlArray, setrmPhotoUrlArray] = useState([]);
  const [rmNickName, setrmNickName] = useState('');
  const [rmNickNameCom, setrmNickNameCom] = useState(true);
  const [rmEmail, setrmEmail] = useState('');
  const [rmEmailCom, setrmEmailCom] = useState(true);
  const [rmCharacteristics, setrmCharacteristics] = useState({});
  const [rmCharacteristicsCom, setrmCharacteristicsCom] = useState(true);
  const [rmPost, setrmPost] = useState({});
  const [mandatoryStatement, setMandatoryStatement] = useState('');

  function onClickStar(e) {
    const starCount = Math.ceil((e.clientX - e.target.getBoundingClientRect().x) / 25);
    setrmStarRating(starCount);
    const starText = ['"Poor"', '"Fair"', '"Average"', '"Good"', '"Great"'];
    setrmStarText(starText[starCount - 1]);
  }

  // on change handler for summary input
  function onChangeSummary(e) {
    if (e.target.value.length < 60) {
      setrmSummary(e.target.value);
    }
  }

  // on change handler for body input
  function onChangeBody(e) {
    setrmBody(e.target.value);
  }

  // on change handler for photo url
  function onChangePhotoUrl(e) {
    setrmPhotoUrl(e.target.value);
  }

  // click handler for add photo button
  function onClickPhotoUrl() {
    if (rmPhotoUrlArray.length < 5 && rmPhotoUrl.length > 0) {
      setrmPhotoUrlArray([...rmPhotoUrlArray, rmPhotoUrl]);
    }
  }

  // click handler to remove photo button
  function onClickRemovePhotorUrl(e) {
    const tempArray = [...rmPhotoUrlArray];
    tempArray.splice(Number(e.target.name), 1);
    setrmPhotoUrlArray(tempArray);
  }

  // on change handler for nickname
  function onChangeNickname(e) {
    setrmNickName(e.target.value);
  }

  // on change handler for email
  function onChangeEmail(e) {
    setrmEmail(e.target.value);
  }

  function setStyle(modalInput) {
    return modalInput ? { color: 'black' } : { color: 'red' };
  }

  function mandatorySection() {
    const rmCharKeys = Object.keys(rmCharacteristics);
    const ratingCharKeys = Object.keys(ratingCharacteristics);
    let output = '';
    const outputString = [];
    rmStarRating === 0 ? outputString.push(' star rating') : null;
    rmRec === null ? outputString.push(' recommendation') : null;
    rmCharKeys.length !== ratingCharKeys.length ? outputString.push(' product characteristics') : null;
    rmSummary.length === 0 ? outputString.push(' summary') : null;
    rmBody.length < 50 ? outputString.push(' body') : null;
    rmNickName.length === 0 ? outputString.push(' nickname') : null;
    rmEmail.length === 0 || !rmEmail.includes('@') || !rmEmail.includes('.') ? outputString.push(' email') : null;
    if (outputString.length === 2) {
      outputString[outputString.length - 1] = ` and${outputString[outputString.length - 1]}.`;
      output = `Please fill out the following sections:${outputString.join('')}`;
      setMandatoryStatement(output);
    } else if (outputString.length > 2) {
      outputString[outputString.length - 1] = ` and${outputString[outputString.length - 1]}.`;
      output = `Please fill out the following sections:${outputString.join()}`;
      setMandatoryStatement(output);
    } else if (outputString.length === 1) {
      output = `Please fill out the following section:${outputString.join()}`;
      setMandatoryStatement(output);
    } else {
      setMandatoryStatement('');
    }
  }

  // need onClick function for submit button
  function onClickSubmit() {
    const rmCharKeys = Object.keys(rmCharacteristics);
    const ratingCharKeys = Object.keys(ratingCharacteristics);

    if (rmStarRating > 0
      && rmSummary.length > 0
      && rmBody.length > 50
      && rmRec !== null
      && rmNickName.length > 0
      && rmEmail.length > 0
      && rmEmail.includes('@')
      && rmEmail.includes('.')
      && rmCharKeys.length === ratingCharKeys.length
    ) {
      const post = {
        product_id: Number(productId),
        rating: rmStarRating,
        summary: rmSummary,
        body: rmBody,
        recommend: rmRec,
        name: rmNickName,
        email: rmEmail,
        photos: rmPhotoUrlArray,
        characteristics: rmCharacteristics,
      };
      axios
        .post('/reviews', post)
        .then(() => {
          setShowModal(!showModal);
        })
        .catch((err) => {
          console.log(err);
          throw err;
        });
    } else {
      rmStarRating === 0 ? setrmStarRatingCom(false) : setrmStarRatingCom(true);
      rmSummary.length === 0 ? setrmSummaryCom(false) : setrmSummaryCom(true);
      rmBody.length < 50 ? setrmBodyCom(false) : setrmBodyCom(true);
      rmRec === null ? setrmRecCom(false) : setrmRecCom(true);
      rmNickName.length === 0 ? setrmNickNameCom(false) : setrmNickNameCom(true);
      rmEmail.length === 0 ? setrmEmailCom(false) : setrmEmailCom(true);
      rmCharKeys.length !== ratingCharKeys.length ? setrmCharacteristicsCom(false) : setrmCharacteristicsCom(true);
      mandatorySection();
    }
  }

  return (
    <Modal value={showModal}>
      <div className="addReviewModal">
        <div id="rmTop">
          <h2 id="rmTitle">Add Review</h2>
          <hr />
          <div id="rmStarSelection" className="rmElement">
            <div style={setStyle(rmStarRatingCom)}>Product star rating*:</div>
            <div onClick={onClickStar}>
              <StarRating rating={rmStarRating} />
            </div>
            <div id="rmStarSelectionText">
              {rmStarText}
            </div>
          </div>
          <div id="rmRecommendation" className="rmElement">
            <div style={setStyle(rmRecCom)}>Do you recommend this product?*</div>
            <div>
              <input type="radio" value="yes" name="recommend" onClick={() => { setrmRec(true); }} />
              {' '}
              Yes
            </div>
            <div>
              <input type="radio" value="no" name="recommend" onClick={() => { setrmRec(false); }} />
              {' '}
              No
            </div>
          </div>
          <div id="rmCharacteristics" className="rmElement">
            <div style={setStyle(rmCharacteristicsCom)}>Product characteristics*:</div>
            <ModalSetUpContext.Provider value={{ rmCharacteristics, setrmCharacteristics }}>
              <RMDescTable characteristics={ratingCharacteristics} />
            </ModalSetUpContext.Provider>
          </div>
          <div>
            <div style={setStyle(rmSummaryCom)}>Review Summary*:</div>
            <textarea id="rmSummary" className="rmElement" type="text" value={rmSummary} cols="30" rows="1" onChange={onChangeSummary} />
          </div>
          <div>
            <div style={setStyle(rmBodyCom)}>Review Body*:</div>
            <textarea id="rmBody" className="rmElement" type="text" value={rmBody} cols="30" rows="8" onChange={onChangeBody} />
            {rmBody.length > 50 ? <div style={setStyle(rmBodyCom)}>Minimum reached</div> : <div style={setStyle(rmBodyCom)}>{`Minimum required characters left: ${50 - rmBody.length}`}</div>}
          </div>
          <div>
            <div id="rmPhotoSection">
              <textarea className="rmElement" id="rmPhotos" placeholder="Photo url" value={rmPhotoUrl} cols="30" rows="1" onChange={onChangePhotoUrl} />
              <button type="button" id="rmPhotoButton" onClick={onClickPhotoUrl}>Add Photo</button>
            </div>
          </div>
          <div id="rmPhotoUrls">
            {rmPhotoUrlArray.map((photoUrl, index) => (
              <div className="addedPhotosContainer">
                <button type="button" className="addedPhotoButton" onClick={onClickRemovePhotorUrl} name={index}>X</button>
                <div className="addedPhotoUrls" key={index}>{photoUrl}</div>
              </div>
            ))}
          </div>
          <div id="rmNickNameSection" className="rmElement">
            <div style={setStyle(rmNickNameCom)}>Nickname*:</div>
            <textarea id="rmPhotos" placeholder="jackson11!" value={rmNickName} cols="30" rows="1" onChange={onChangeNickname} />
          </div>
          <div id="rmEmailSection" className="rmElement">
            <div style={setStyle(rmEmailCom)}>Email*:</div>
            <textarea id="rmEmail" placeholder="jackson11!@email.com" value={rmEmail} cols="30" rows="1" onChange={onChangeEmail} />
          </div>
        </div>
        <div id="rmFooter">
          <div id="rmFooterMandatoryStatement">
            <div>* = mandatory field</div>
            <div style={{ color: 'red' }}>
              {mandatoryStatement}
            </div>
          </div>
          <hr />
          <div id="rmButtons" className="rmElement">
            <button type="button" className="rmButton" data-testid="addReviewCancelButton" onClick={() => { setShowModal(!showModal); }}>Cancel</button>
            <button type="button" className="rmButton" onClick={onClickSubmit}>Submit</button>
          </div>
        </div>
      </div>
    </Modal>
  );
}
