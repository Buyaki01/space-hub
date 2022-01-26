import Axios from 'axios';

const GET_MISSIONS = 'GET_MISSIONS';
const JOIN_MISSION = 'JOIN_MISSION';

const initialState = [];

// Add Action
const getMissions = (payload) => ({
  type: GET_MISSIONS,
  payload,
});

export const joinMission = (payload) => ({
  type: JOIN_MISSION,
  payload,
});

export const getMissionsFromApi = () => async (dispatch) => {
  const returnData = await Axios.get('https://api.spacexdata.com/v3/missions');
  const missionsData = returnData.data;
  const missions = [];
  for (let i = 0; i < missionsData.length; i += 1) {
    const title = missionsData[i].mission_name;
    const id = missionsData[i].mission_id;
    const { description } = missionsData[i];
    const membership = false;
    const object = {
      id, title, description, membership,
    };
    missions.push(object);
  }
  dispatch(getMissions(missions));
};

const updateMembership = (state, payload) => {
  const newState = state.map((mission) => {
    if (mission.id !== payload) return mission;
    return { ...mission, membership: !mission.membership };
  });
  return newState;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MISSIONS:
      return action.payload;
    case JOIN_MISSION:
      return updateMembership(state, action.payload);
    default:
      return state;
  }
};

export default reducer;
