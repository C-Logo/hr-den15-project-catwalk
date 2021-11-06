import React, { useContext, useState } from 'react';
import Modal from '../Modal.jsx';
import { ReviewsContext } from './Reviews.jsx';

export default function ModalSetUp() {
  const { showModal, setShowModal } = useContext(ReviewsContext);
  return (
    <Modal value={showModal}>
      <div className="addReviewModal">
        <button type="button" onClick={() => { setShowModal(!showModal); }}>test</button>
        <div>testmore</div>
      </div>
    </Modal>
  );
}
