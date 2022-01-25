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
      {rockets.map((rocket) => (
        <li key={rocket.id}>
          <div><img src={rocket.flickr_images[0]} alt="rocket" /></div>
          <div>
            <h2>{rocket.rocket_name}</h2>
            <p>
              {!rocket.reserved && <span>Reserved</span>}
              {rocket.description}
            </p>
            <button type="button">Reserve Rocket</button>
            {!rocket.reserved && <button type="button" className="cancel">Cancel Reservation</button>}
          </div>
        </li>
      ))}
    </div>
  );
};

export default Rockets;
