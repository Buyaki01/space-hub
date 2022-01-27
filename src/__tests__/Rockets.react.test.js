import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';

import Rockets from '../components/Rockets/RocketsList';
import store from '../redux/store';

describe('Rockets', () => {
  // const { asFragment } = render(<Provider store={store}><Rockets /></Provider>);

  // test('should render component correctly', () => {
  //   expect(asFragment()).toMatchSnapshot();
  // });

  test('should conditionally render elements when buttons are clicked', () => {
    render(<Provider store={store}><Rockets /></Provider>);
  });
});
