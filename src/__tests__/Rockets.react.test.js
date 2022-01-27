import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import Rockets from '../components/Rockets/RocketsList';
import RocketsItem from '../components/Rockets/RocketsItem';
import Header from '../components/Header/Header';
import store from '../redux/store';

// Header Component
describe('Header', () => {
  test('should render component', () => {
    const { asFragment } = render(<Header />, { wrapper: MemoryRouter });
    expect(asFragment()).toMatchSnapshot();
  });

  test('should render children correctly', () => {
    const { container } = render(<Header />, { wrapper: MemoryRouter });

    const logoContainer = container.querySelector('div#logo');
    const navBar = container.querySelector('nav');

    expect(logoContainer.children.length).toBe(2);
    expect(navBar.children.length).toBe(4);
    expect(screen.getByText('Rockets')).toBeInTheDocument();
    expect(screen.getByText('Dragons')).toBeInTheDocument();
    expect(screen.getByText('Rockets')).toBeInTheDocument();
    expect(screen.getByText('My Profile')).toBeInTheDocument();
  });
});

// Rockets Component
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
