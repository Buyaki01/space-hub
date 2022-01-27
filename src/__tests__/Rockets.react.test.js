import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';

import Rockets from '../components/Rockets/RocketsList';
import RocketsItem from '../components/Rockets/RocketsItem';
import store from '../redux/store';

describe('Rockets', () => {
  test('should render component correctly', () => {
    const { asFragment } = render(<Provider store={store}><Rockets /></Provider>);
    expect(asFragment()).toMatchSnapshot();
  });

  test('should conditionally render elements when buttons are clicked', () => {
    const { asFragment } = render(<Provider store={store}><RocketsItem /></Provider>);
    expect(asFragment()).toMatchSnapshot();
  });
});
