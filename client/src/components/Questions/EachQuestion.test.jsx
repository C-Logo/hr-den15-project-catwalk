import '@testing-library/jest-dom/extend-expect';
import {
  render, fireEvent, screen, waitFor, cleanup,
} from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import React from 'react';
import axios from 'axios';
import App from '../App.jsx';
import Overview from '../Overview/Overview.jsx';
import Questions from './Questions.jsx';
import Reviews from '../reviews/Reviews.jsx';

jest.mock('axios');

afterEach(cleanup);
jest.mock('react', () => {
  const react = jest.requireActual('react');

  return {
    ...react,
    useRef: () => null,
  };
});

test('Tests a child component to render', async () => {
  axios.get
    .mockImplementationOnce(() => Promise.resolve({
      data: {
        results: [
          {
            question_id: 543166,
            question_body: 'Is this a center for ants?!',
            question_date: '2021-11-06T00:00:00.000Z',
            asker_name: 'Derek Z.',
          },
        ],
      },
    }));
  let component;
  await act(async () => {
    component = render(
      <App>
        {(interactionHandler) => (
          <div id="mainContainer">
            {/* <Overview interactionHandler={interactionHandler} /> */}
            <Questions interactionHandler={interactionHandler} />
            {/* <Reviews interactionHandler={interactionHandler} /> */}
          </div>
        )}
      </App>,
    );
  });
  expect(component.getByText('Add answer')).toBeInTheDocument();
});
