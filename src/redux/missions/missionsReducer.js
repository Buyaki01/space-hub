const GET_MISSIONS = 'GET_MISSIONS';
const initialState = [];

// Add Action

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MISSIONS:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
