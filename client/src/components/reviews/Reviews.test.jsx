import '@testing-library/jest-dom/extend-expect';
import {
  render, fireEvent, screen, waitFor,
} from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import React from 'react';
import axiosMock from 'axios';
import App from '../App.jsx';
import Reviews from './Reviews.jsx';

jest.mock('react', () => {
  const react = jest.requireActual('react');

  return {
    ...react,
    useRef: () => null,
  };
});

test('Loads the add review modal', async () => {
  await act(async () => {
    render(
      <App>
        {(interactionHandler) => (
          <div id="mainContainer">
            <Reviews interactionHandler={interactionHandler} />
          </div>
        )}
      </App>,
    );
    const addAReviewButton = screen.getByTestId('addReviewButton');
    expect(screen.getByText('Ratings and Reviews')).toBeInTheDocument();
    expect(addAReviewButton).toBeTruthy();

    // open modal
    fireEvent.click(addAReviewButton);
    await waitFor(() => {
      expect(screen.getByText('Nickname*:')).toBeInTheDocument();
    });
    fireEvent.click(screen.getByTestId('addReviewCancelButton'));
    // close modal
  });
});
