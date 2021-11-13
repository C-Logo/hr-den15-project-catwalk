import '@testing-library/jest-dom/extend-expect';
import {
  render, fireEvent, screen, waitFor,
} from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import React from 'react';
import App from '../App.jsx';
import Overview from '../Overview/Overview.jsx';
import Questions from './Questions.jsx';
import Reviews from '../reviews/Reviews.jsx';

jest.mock('react', () => {
  const react = jest.requireActual('react');

  return {
    ...react,
    useRef: () => null,
  };
});

test('Tests a child component to render', async () => {
  const { getByText } = render(
    <App>
      {(interactionHandler) => (
        <div id="mainContainer">
          {/* <Overview interactionHandler={interactionHandler} /> */}
          <Questions interactionHandler={interactionHandler} />
        </div>
      )}
    </App>,
  );

  expect(getByText('Add answer')).toBeInTheDocument();
});
