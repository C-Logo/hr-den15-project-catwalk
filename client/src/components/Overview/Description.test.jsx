import '@testing-library/jest-dom/extend-expect';
import {
  render, fireEvent, queryByAttribute, screen, waitFor, cleanup,
} from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import React from 'react';
import axios from 'axios';
import App from '../App.jsx';
import Overview from './Overview.jsx';
import Questions from '../Questions/Questions.jsx';

jest.mock('axios');

afterEach(cleanup);

jest.mock('react', () => {
  const react = jest.requireActual('react');
  return {
    ...react,
    useRef: () => null,
  };
});

test('Displays Description', async () => {
  axios.get
    .mockImplementationOnce(() => Promise.resolve({
      data: { name: 'Camo Onesie' },
    }));

  let component;
  await act(async () => {
    render(
      <App>
        {(interactionHandler) => (
          <div id="mainContainer">
            <Overview interactionHandler={interactionHandler} />
            {/* <Questions interactionHandler={interactionHandler} /> */}
          </div>
        )}
      </App>,
    );
  });
  // screen.debug;
  await waitFor(() => {
    expect(screen.getByText('Camo Onesie')).toBeTruthy();
  });
});
