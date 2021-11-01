import React, { useState, useContext } from 'react';
import Image from './Image.jsx';
import RightColumn from './RightColumn.jsx';

export const ExtendUpdateContext = React.createContext();

export default function Main() {
  const [extend, setExtend] = useState(false);
  // const [changeExtend, setChangeExtend] = useState(setExtend(!extend));

  const changeExtend = () => {
    setExtend(!extend);
  };

  return (
    <ExtendUpdateContext.Provider value={{ changeExtend, extend }}>
      <div>
        <div className="overview-main">
          <Image click={setExtend} extend={extend} />
          {extend ? '' : <RightColumn />}
        </div>
        <div className="overview-information"> Product Information </div>
      </div>
    </ExtendUpdateContext.Provider>
  );
}
