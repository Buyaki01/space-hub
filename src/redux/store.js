import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import dragonsReducer from './dragons/dragonReducer';
import missionsReducer from './missions/missionsReducer';

const reducers = combineReducers({
  dragonsReducer,
  missionsReducer,
});

const store = createStore(
  reducers,
  applyMiddleware(logger, thunk),
);

export default store;
