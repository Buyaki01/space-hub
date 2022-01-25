export const initDragons = (payload) => ({
  type: 'INIT_DRAGONS',
  payload,
});

const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'INIT_DRAGONS':
      return {
        ...state,
        dragons: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
