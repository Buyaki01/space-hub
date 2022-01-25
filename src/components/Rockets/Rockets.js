import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './Rockets.scss';
import { fetchRockets } from '../../redux/rockets/rocketReducer';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector(({ rocketsReducer }) => rocketsReducer.rockets);

  useEffect(() => {
    dispatch(fetchRockets());
  }, []);

  return (
    <div>
      {rockets.map((rocket) => <h2 key={rocket.id}>{rocket.description}</h2>)}
    </div>
  );
};

export default Rockets;
