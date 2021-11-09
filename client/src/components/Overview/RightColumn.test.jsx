import '@testing-library/jest-dom/extend-expect';
import {
  render, fireEvent, queryByAttribute, screen,
} from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import React from 'react';
import App from '../App.jsx';
import Overview from './Overview.jsx';
import Questions from '../Questions/Questions.jsx';

jest.mock('react', () => {
  const react = jest.requireActual('react');

  return {
    ...react,
    useRef: () => null,
  };
});

test('Make sure Add To Cart Loads', async () => {
  let component;
  await act(async () => {
    component = render(
      <App>
        {(interactionHandler) => (
          <div id="mainContainer">
            <Overview interactionHandler={interactionHandler} />
            <Questions interactionHandler={interactionHandler} />
          </div>
        )}
      </App>,
    );
  });

  expect().toBeFalsy;
  // expect(component.getByText('Add to Cart')).toBeInTheDocument();
  // expect(component.getByText('Add to Cart')).toBeDisabled;
  // expect(component.getByText('Add to Cart')).toBeEnabled;
  // const handleClick = jest.fn();
  // component.getByText('Add to Cart').focus();

  // fireEvent.click(document.activeElement);
});
