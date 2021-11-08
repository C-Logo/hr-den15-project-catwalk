import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import React from 'react';
import Questions from './Questions.jsx';

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
    component = render(<Questions />);
    expect(component.getByText('QUESTIONS & ANSWERS')).toBeInTheDocument();
  });
});
