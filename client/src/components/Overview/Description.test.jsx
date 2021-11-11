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

test('Displays Description', async () => {
  let component;
  await act(async () => {
    component = render(
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
  const length = component.getAllByText('Tweet');
  expect(length).toHaveLength(1);
  // expect().
});
