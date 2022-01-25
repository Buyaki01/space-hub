const rocketsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ROCKETS_LOADED':
      return state;
    default:
      return state;
  }
};

export default rocketsReducer;
