import { initDragons } from '../redux/dragons/dragonReducer';

const API_BASE = 'https://api.spacexdata.com/v3/dragons';

const getDragons = () => async (dispatch) => {
  const response = await fetch(API_BASE);
  const data = await response.json();
  dispatch(initDragons(data));
};

export default getDragons;
