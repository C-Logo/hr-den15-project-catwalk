import React, { useState } from 'react';
import axios from 'axios';

export const AppContext = React.createContext();

export default function App(props) {
  const [averageStars, setAverageStars] = useState(0);

  function clickAnywhere(e, widget) {
    // console.log(widget);
    const data = {};
    data.widget = widget;
    data.time = Date();
    function getMyPathByIndex(element) {
      if (element == null) {
        return '';
      } if (element.id) {
        return `#${element.id}`;
      } if (element.parentElement == null) {
        return 'html';
      } if (element.className) {
        return `${getMyPathByIndex(element.parentElement)} > ${element.nodeName.toLowerCase()}.${element.className}`;
      }
      return `${getMyPathByIndex(element.parentElement)} > ${element.nodeName.toLowerCase()}:nth-child(${getMyIndex(element)})`;
    }
    function getMyIndex(element) {
      if (element == null) {
        return -1;
      } if (element.parentElement == null) {
        return 0;
      }
      const parent = element.parentElement;
      for (let index = 0; index < parent.childElementCount; index++) {
        if (parent.children[index] == element) {
          return index + 1;
        }
      }
    }
    data.element = getMyPathByIndex(e.target);
    axios
      .post('/interactions', data)
      // .then((response) => {
      //   response.end()
      // })
      .catch((err) => {
        console.log(err);
        throw err;
      });
  }

  // delcare state variables
  return (
    <AppContext.Provider value={{ averageStars, setAverageStars }}>
      {props.children(clickAnywhere)}
    </AppContext.Provider>
  );
}

// { /* <div id="mainContainer"> */ }
// { /* </div> */ }
