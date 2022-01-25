import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import getDragons from './modules/dragonsAPI';
import { initDragons } from './redux/dragons/dragonReducer';

getDragons().then((data) => store.dispatch(initDragons(data)));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
