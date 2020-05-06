import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const textElement = getByText('Click me please');
  expect(textElement).toBeInTheDocument();
  console.log(document.body.innerHTML);
});
