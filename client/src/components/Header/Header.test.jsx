import '@testing-library/jest-dom/extend-expect';
import {
  render, fireEvent, queryByAttribute, screen,
} from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import React from 'react';
import App from '../App.jsx';
import Overview from '../Overview/Overview.jsx';
import Questions from '../Questions/Questions.jsx';

test('Cart is Empty on Load', async () => {
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

  expect(component.getByText('Cart is empty')).toBeInTheDocument();
  expect(component.getByText('Project Catwalk')).toBeInTheDocument();
});
