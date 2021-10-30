/* eslint-disable import/extensions */
import React, { useState, useEffect, useContext } from 'react';
import Announcements from '../Header/Announcements.jsx';
import Header from '../Header/Header.jsx';
import Main from './Main.jsx';

export default function Overview() {
  // declare state variables here

  return (
    <div>
      <Header />
      <Announcements />
      <Main />
    </div>
  );
}
