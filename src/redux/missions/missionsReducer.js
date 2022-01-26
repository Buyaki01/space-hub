import Axios from 'axios';

const GET_MISSIONS = 'GET_MISSIONS';

const initialState = [];

// Add Action
const getMissions = (payload) => ({
  type: GET_MISSIONS,
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
    const object = {
      id, title, description,
    };
    missions.push(object);
  }
  dispatch(getMissions(missions));
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MISSIONS:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
