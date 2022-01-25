import * as Actions from './rocketsAction';

const initialState = {
  rockets: [],
};

const toggleReserved = (state, payload) => state.map((rocket) => (
  rocket.id !== payload
    ? rocket : { ...rocket, reserved: !rocket.reserved }
));

const rocketsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case Actions.ROCKETS_LOADED:
      return { rockets: [...payload] };
    case Actions.ROCKETS_RESERVED:
      return { rockets: toggleReserved(state.rockets, payload) };
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
