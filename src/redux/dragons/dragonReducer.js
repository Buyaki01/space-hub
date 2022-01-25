export const initDragons = (payload) => ({
  type: 'INIT_DRAGONS',
  payload,
});

const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'INIT_DRAGONS':
      return {
        ...action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
