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

test('Loads the Questions and Answer header', async () => {
  let component;

  await act(async () => {
    component = render(
      <App>
        {(interactionHandler) => (
          <div id="mainContainer">
            <Overview interactionHandler={interactionHandler} />
            <Questions interactionHandler={interactionHandler} />
            <Reviews interactionHandler={interactionHandler} />
          </div>
        )}
      </App>,
    );
    expect(component.getByText('QUESTIONS & ANSWERS')).toBeInTheDocument();
  });
});

test('Loads a new question modal', async () => {
  await act(async () => {
    render(
      <App>
        {(interactionHandler) => (
          <div id="mainContainer">
            {/* <Overview interactionHandler={interactionHandler} /> */}
            <Questions interactionHandler={interactionHandler} />
          </div>
        )}
      </App>,
    );
    const addAQuestionButton = screen.getByTestId('questionbutton');
    expect(addAQuestionButton).toBeTruthy();
    fireEvent.click(addAQuestionButton);
    await waitFor(() => {
      expect(screen.getByText('Nickname *')).toBeTruthy();
    });
  });
});
