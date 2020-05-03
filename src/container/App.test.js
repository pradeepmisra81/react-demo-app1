import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { Button } from '@material-ui/core';

test('renders welcome message', () => {
  const { getByText } = render(<App />);
  const textElement = getByText('Hi, this is a react demo application');
  expect(textElement).toBeInTheDocument();
});

// test('<Button/>', () => {
//   const wrapper = shallow(<Button/>);
//   expect(wrapper.find(Button));
// });
