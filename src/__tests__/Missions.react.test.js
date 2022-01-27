import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import MissionsContainer from '../components/missions/MissionsContainer';
import MissionsList from '../components/missions/MissionsList';
import MissionItem from '../components/missions/MissionItem';
import store from '../redux/store';

describe('Missions', () => {
  test('should render component correctly', () => {
    const { asFragment } = render(<Provider store={store}><MissionsContainer /></Provider>);
    expect(asFragment()).toMatchSnapshot();
  });

  test('should render component correctly', () => {
    const { asFragment } = render(<Provider store={store}><MissionsList /></Provider>);
    expect(asFragment()).toMatchSnapshot();
  });

  test('should render component correctly', () => {
    const { asFragment } = render(<Provider store={store}><MissionItem /></Provider>);
    expect(asFragment()).toMatchSnapshot();
  });
});
