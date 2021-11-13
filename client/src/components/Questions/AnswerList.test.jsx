import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent, screen } from '@testing-library/react';
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

test('Loads more answers for a given question', async () => {
  await act(async () => {
    render(<App>
      {(interactionHandler) => (
        <div id="mainContainer">
          <Overview interactionHandler={interactionHandler} />
          <Questions interactionHandler={interactionHandler} />
          <Reviews interactionHandler={interactionHandler} />
        </div>
      )}
           </App>);
    fireEvent.click(screen.getByText('See more answers'));
    expect(screen.getByText('blotchy')).toBeTruthy();
  });
});
