import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './Rockets.scss';
import { fetchRockets } from '../../redux/rockets/rocketReducer';
import { reserveRockets } from '../../redux/rockets/rocketsAction';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector(({ rocketsReducer }) => rocketsReducer.rockets);

  useEffect(() => {
    if (rockets.length === 0) dispatch(fetchRockets());
  }, []);

  const handleClick = (id) => {
    dispatch(reserveRockets(id));
  };

  return (
    <div className="rockets-container">
      {rockets.map((rocket) => (
        <li key={rocket.id} className="rocket_list">
          <div><img src={rocket.flickr_images[0]} alt="rocket" /></div>
          <div>
            <h2>{rocket.rocket_name}</h2>
            <p>
              {rocket.reserved && <span>Reserved</span>}
              {rocket.description}
              <a href={rocket.wikipedia} target="_blank" rel="noreferrer noopener">Read More...</a>
            </p>
            {!rocket.reserved && <button type="button" onClick={() => handleClick(rocket.id)}>Reserve Rocket</button>}
            {rocket.reserved && <button type="button" className="cancel" onClick={() => handleClick(rocket.id)}>Cancel Reservation</button>}
          </div>
        </li>
      ))}
    </div>
  );
};

export default Rockets;
