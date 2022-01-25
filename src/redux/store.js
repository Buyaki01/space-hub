import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import dragonsReducer from './dragons/dragonReducer';
<<<<<<< HEAD
import missionsReducer from './missions/missionsReducer';

const reducers = combineReducers({
  dragonsReducer,
  missionsReducer,
=======
import rocketsReducer from './rockets/rocketReducer';

const reducers = combineReducers({
  dragonsReducer,
  rocketsReducer,
>>>>>>> f8c89723c1210ea06b81e9f644d4ef10824c1ffd
});

const store = createStore(
  reducers,
  applyMiddleware(logger, thunk),
);

export default store;
