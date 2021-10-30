import React, { useState, useContext } from 'react';
import Image from './Image.jsx';

export const ExtendUpdateContext = React.createContext();

export default function Main() {
  const [extend, setExtend] = useState(false);
  // const [changeExtend, setChangeExtend] = useState(setExtend(!extend));

  const changeExtend = 
  return (
    <ExtendUpdateContext.Provider value={extend}>
      <div>
        <button type="button" onClick={() => { setExtend(!extend); }}>Extend</button>
        <div className="overview-main">
          <Image click={setExtend} extend={extend} />
          {extend ? '' : <div className="overview-right">Right Side Bar</div>}
        </div>
      </div>
    </ExtendUpdateContext.Provider>
  );
}
