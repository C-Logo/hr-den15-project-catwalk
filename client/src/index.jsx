import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import Overview from './components/Overview/Overview.jsx';
import Questions from './components/Questions/Questions.jsx';
import Reviews from './components/reviews/Reviews.jsx';

ReactDOM.render(
  <App>
    {(interactionHandler) => (
      <div id="mainContainer">
        <Overview interactionHandler={interactionHandler} />
        <Questions interactionHandler={interactionHandler} />
        <Reviews interactionHandler={interactionHandler} />
      </div>
    )}
  </App>,
  document.getElementById('app'),
);
