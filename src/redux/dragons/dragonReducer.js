export const INIT_DRAGONS = 'spaceHub/dragons/INIT_DRAGONS';

export const initDragons = (payload) => ({
  type: INIT_DRAGONS,
  payload,
});

const reducer = (state = {}, action) => {
  switch (action.type) {
    case INIT_DRAGONS:
      return {
        dragons: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
