import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './Rockets.scss';
import { fetchRockets } from '../../redux/rockets/rocketReducer';
import { reserveRockets } from '../../redux/rockets/rocketsAction';
import RocketsItem from './RocketsItem';

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
        <li key={rocket.id} className="rocket_list" data-testid="rocket">
          <RocketsItem
            id={rocket.id}
            image={rocket.flickr_images[0]}
            name={rocket.rocket_name}
            reserved={rocket.reserved}
            desc={rocket.description}
            wiki={rocket.wikipedia}
            handleClick={handleClick}
          />
        </li>
      ))}
    </div>
  );
};

export default Rockets;
