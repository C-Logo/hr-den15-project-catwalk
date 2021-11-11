import '@testing-library/jest-dom/extend-expect';
import {
  render, fireEvent, queryByAttribute, screen,
} from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import React from 'react';
import axios from 'axios';
import App from '../App.jsx';
import Overview from './Overview.jsx';
import Questions from '../Questions/Questions.jsx';

jest.mock('axios');

jest.mock('react', () => {
  const react = jest.requireActual('react');
  return {
    ...react,
    useRef: () => null,
  };
});

test('Displays Description', async () => {
  const mockData = {
    data: {
      id: 44388,
      campus: 'hr-den',
      name: 'Camo Onesie',
      slogan: 'Blend in to your crowd',
      description: 'The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.',
      category: 'Jackets',
      default_price: '140.00',
      created_at: '2021-08-13T14:40:29.181Z',
      updated_at: '2021-08-13T14:40:29.181Z',
    },
  };

  axios.get.mockResolvedValue(mockData);

  let component;
  await act(async () => {
    const { findAllByText } = render(
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
  screen.debug;
  const text = await findAllByText('Camo');
  expect(text).toHaveLength(1);
  // mockAxios.get.mockImplementationOnce(() => Promise.resolve({
  //   data: {
  //     results: ['Blend'],
  //   },
  // }));
  // screen.debug();
  // const text = await
  // console.log(component);
  // expect(component.getByText('Blend')).toBeVisible();
  // expect(mockAxios.get).toHaveBeenCalledTimes(2);
  // expect(mockAxios.get).toHaveBeenCalledWith('/products/44388');
  // const length = component.getAllByText('Tweet');
  // expect(length).toHaveLength(1);
  // expect().
});
