import '@testing-library/jest-dom/extend-expect';
import {
  render, fireEvent, waitFor, cleanup,
} from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import React from 'react';
import axiosMock from 'axios';
import App from '../App.jsx';
import Overview from './Overview.jsx';
import Questions from '../Questions/Questions.jsx';
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

test('\n\n\n\n\n=============Testing Mock=============', async () => {
  axiosMock.get('/products').mockResolvedValueOnce({ data: { name: 'Camo Onesie' } });

  let component;
  await act(async () => {
    component = render(
      <App>
        {(interactionHandler) => (
          <div id="mainContainer">
            <Overview interactionHandler={interactionHandler} />
            {/* <Questions interactionHandler={interactionHandler} /> */}
            {/* <Reviews interactionHandler={interactionHandler} /> */}
          </div>
        )}
      </App>,
    );
    await waitFor(() => {
      expect(component.getByText('Camo Onesie')).toBeInTheDocument();
      // expect(0).toBeTruthy();
      // console.log(component.getByText('Camo Onesie'));
    });
  });
});
