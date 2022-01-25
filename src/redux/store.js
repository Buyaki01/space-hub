import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import dragonsReducer from './dragons/dragonReducer';
import rocketsReducer from './rockets/rocketReducer';

const reducers = combineReducers({
  dragonsReducer,
  rocketsReducer,
});

const store = createStore(
  reducers,
  applyMiddleware(logger, thunk),
);

export default store;
