export const ROCKETS_LOADED = 'spaceHub/rockets/ROCKETS_LOADED';

export const loadRockets = (payload) => ({
  type: ROCKETS_LOADED,
  payload,
});
