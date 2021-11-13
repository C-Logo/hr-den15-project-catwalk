import '@testing-library/jest-dom/extend-expect';
import {
  render, fireEvent, waitFor, cleanup, screen,
} from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import React from 'react';
import axiosMock from 'axios';
import axios from 'axios';
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
// describe('Overview - Right Column Tests', () => {
test('Product Name should be displayed', async () => {
  axios.get
    .mockImplementationOnce(() => Promise.resolve({
      data: { name: 'Camo Onesie - test' },
    }));

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
  });
  await waitFor(() => {
    expect(component.getByText('Camo Onesie - test')).toBeInTheDocument();
    // expect(0).toBeTruthy();
    // console.log(component.getByText('Camo Onesie'));
  });
});

test('Price should be displayed', async () => {
  axios.get
    .mockImplementationOnce(() => Promise.resolve({
      data: {
        name: 'Camo Onesie',
        product_id: 44388,
        results: [
          {
            style_id: 266902,
            name: 'Forest Green & Black',
            original_price: '140.00',
          }],
      },
    }))
    .mockImplementationOnce(() => Promise.resolve({
      status: 200,
      data: {
        product_id: 44388,
        results: [
          {
            style_id: 266902,
            name: 'Forest Green & Black',
            original_price: '140.00',
          }],
      },
    }));

  await act(async () => {
    render(
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
  });
  await waitFor(() => {
    // console.log('test', screen.findByTestId('original-price'));
    expect(screen.findByText('140.00')).toBeTruthy();
    // expect(0).toBeTruthy();
    // console.log(component.getByText('Camo Onesie'));
  });
});
// });
