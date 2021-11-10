import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
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
    component = render(<App>
      {(interactionHandler) => (
        <div id="mainContainer">
          <Overview interactionHandler={interactionHandler} />
          <Questions interactionHandler={interactionHandler} />
        </div>
      )}
    </App>);
    expect(component.getByText('QUESTIONS & ANSWERS')).toBeInTheDocument();
  });
});

test('Loads a new question modal', async () => {
  let component;

  await act(async () => {
    component = render(<App>
      {(interactionHandler) => (
        <div id="mainContainer">
          <Overview interactionHandler={interactionHandler} />
          <Questions interactionHandler={interactionHandler} />
        </div>
      )}
    </App>);
    const addAQuestionButton = component.getByTestId('questionbutton')
    fireEvent.click(addAQuestionButton)
    expect(component.getByText('Nickname')).toBeInTheDocument();
  });
});
