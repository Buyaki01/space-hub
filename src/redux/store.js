import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import dragons from './dragons/dragonReducer';

const reducers = combineReducers({
  dragons,
});

const store = createStore(
  reducers,
  applyMiddleware(logger, thunk),
);

export default store;
