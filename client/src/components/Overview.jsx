import React, { useState, useEffect, useContext } from 'react';
import Announcements from './Header/Announcements.jsx';
import Header from './Header/Header.jsx';

export default function Overview() {
  // declare state variables here

  return (
    <div>
      <Header />
      <Announcements />
      <div>Main Product Overview Container</div>
    </div>
  );
}
