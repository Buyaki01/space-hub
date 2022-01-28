import { initDragons } from '../redux/dragons/dragonReducer';

const getDragons = () => async (dispatch) => {
  const response = await fetch('https://api.spacexdata.com/v3/dragons');
  const data = await response.json();
  dispatch(initDragons(data));
};

export default getDragons;
