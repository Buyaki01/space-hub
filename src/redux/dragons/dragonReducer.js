export const INIT_DRAGONS = 'spaceHub/dragons/INIT_DRAGONS';
export const TOGGLE_DRAGON_RESERVATION = 'spaceHub/dragons/TOGGLE_DRAGON';

const iniState = { dragons: [] };

export const initDragons = (payload) => ({
  type: INIT_DRAGONS,
  payload,
});

export const toggleDragonReservation = (payload) => ({
  type: TOGGLE_DRAGON_RESERVATION,
  payload,
});

const reducer = (state = iniState, action) => {
  const newDragonsAfterToggle = state.dragons.map(
    (dragon) => (dragon.id !== action.payload ? dragon : { ...dragon, reserved: !dragon.reserved }),
  );

  switch (action.type) {
    case INIT_DRAGONS:
      return {
        dragons: action.payload,
      };
    case TOGGLE_DRAGON_RESERVATION:
      return {
        dragons: newDragonsAfterToggle,
      };
    default:
      return state;
  }
};

export default reducer;
