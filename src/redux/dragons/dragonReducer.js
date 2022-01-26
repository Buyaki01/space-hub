export const INIT_DRAGONS = 'spaceHub/dragons/INIT_DRAGONS';

const iniState = { dragons: [] };

export const initDragons = (payload) => ({
  type: INIT_DRAGONS,
  payload,
});

const reducer = (state = iniState, action) => {
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
