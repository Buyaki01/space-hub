import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import store from '../redux/store';

import DragonsPage from '../components/Pages/DragonsPage';

jest.mock('../modules/dragonsAPI');

describe('<DragonsPage />', () => {
  test('Render a text when no dragons data available', () => {
    render(
      <Provider store={store}>
        <DragonsPage />
      </Provider>,
    );
    const text = screen.getByText(/No Data Available/);
    expect(text).toBeInTheDocument();
  });

  test('Test DragonPage Render', () => {
    const tree = render(
      <Provider store={store}>
        <DragonsPage />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
