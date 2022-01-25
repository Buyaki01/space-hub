import * as Actions from './rocketsAction';

const initialState = {
  rockets: [],
};

const rocketsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case Actions.ROCKETS_LOADED:
      return { rockets: [...payload] };
    default:
      return state;
  }
};

export const fetchRockets = () => async (dispatch) => {
  const res = await fetch('https://api.spacexdata.com/v3/rockets');
  const data = await res.json();
  dispatch(Actions.loadRockets(data));
};

export default rocketsReducer;
