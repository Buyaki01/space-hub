export const ROCKETS_LOADED = 'spaceHub/rockets/ROCKETS_LOADED';
export const ROCKETS_RESERVED = 'spaceHub/rockets/ROCKETS_RESERVED';

export const loadRockets = (payload) => ({
  type: ROCKETS_LOADED,
  payload,
});

export const reserveRockets = (payload) => ({
  type: ROCKETS_RESERVED,
  payload,
});
