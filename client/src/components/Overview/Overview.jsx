/* eslint-disable import/extensions */
import React, { useState, useEffect, useContext } from 'react';
import Announcements from '../Header/Announcements.jsx';
import Header from '../Header/Header.jsx';
import Main from './Main.jsx';

export default function Overview(props) {
  // declare state variables here
  console.log(props);

  return (
    <div onClick={(e) => { props.interactionHandler(e, 'Overview'); }}>
      <Header />
      <Announcements />
      <Main />
    </div>
  );
}
