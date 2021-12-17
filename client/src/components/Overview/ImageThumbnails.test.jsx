import '@testing-library/jest-dom/extend-expect';
import {
  render, fireEvent, waitFor, cleanup, screen,
} from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import React from 'react';
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

test('A thumbnail should be displayed', async () => {
  axios.get
    .mockResolvedValueOnce({
      data: {
        name: 'Camo Onesie',
        product_id: 44388,
        results: [
          {
            style_id: 266902,
            name: 'Forest Green & Black',
            original_price: '140.00',
            photos: [
              {
                thumbnail_url: 'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                url: 'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
              },
            ],
          },
        ],
      },
    })
    .mockResolvedValueOnce({
      data: {
        name: 'Camo Onesie',
        product_id: 44388,
        results: [
          {
            style_id: 266902,
            name: 'Forest Green & Black',
            original_price: '140.00',
            photos: [
              {
                thumbnail_url: 'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                url: 'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
              },
            ],
          },
        ],
      },
    });

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
    const source = 'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80';
    const image = screen.getByRole('button-0');
    expect(image).toHaveStyle({ 'background-image': `url(${source})` });
  });
});

test('clicking a thumbnail should change main image', async () => {
  axios.get
    .mockResolvedValueOnce({
      data: {
        name: 'Camo Onesie',
        product_id: 44388,
        results: [
          {
            style_id: 266902,
            name: 'Forest Green & Black',
            original_price: '140.00',
            photos: [
              {
                thumbnail_url: 'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                url: 'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
              },
            ],
          },
        ],
      },
    })
    .mockResolvedValueOnce({
      data: {
        name: 'Camo Onesie',
        product_id: 44388,
        results: [
          {
            style_id: 266902,
            name: 'Forest Green & Black',
            original_price: '140.00',
            photos: [
              {
                thumbnail_url: 'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                url: 'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
              },
              {
                thumbnail_url: 'https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                url: 'https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80',
              },
            ],
          },
        ],
      },
    });

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
    const source = 'https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80';
    const thumbImage = screen.getByRole('button-0');
    fireEvent.click(thumbImage);
    const mainImage = screen.queryByRole('photo');
    console.log('image==', mainImage);
    expect(mainImage).toHaveStyle({ 'background-image': `url(${source})` });
  });
});

// next-button
