import { useSelector, useDispatch } from 'react-redux';
import { reserveRockets } from '../../redux/rockets/rocketsAction';
import './Profile.scss';

const Profile = () => {
  const dispatch = useDispatch();
  const rockets = useSelector(({ rocketsReducer }) => rocketsReducer.rockets);
  const reserved = rockets.filter((rocket) => rocket.reserved);

  const dragons = useSelector(({ dragonsReducer }) => dragonsReducer.dragons);
  const reservedDragons = dragons.filter((dragon) => dragon.reserved);

  const missions = useSelector((state) => state.missionsReducer);
  const reservedMissions = missions.filter((mission) => mission.membership);

  const handleClick = (id) => {
    dispatch(reserveRockets(id));
  };

  return (
    <div className="profile">
      <div>
        <h2> My Missions </h2>
        <div className="profile-missions">
          {reservedMissions.map((mission) => (
            <p key={mission.id}>{mission.title}</p>
          ))}
        </div>
      </div>

      <div>
        <h2>My Rockets</h2>
        <ul className="rockets">
          {reserved.length
            ? reserved.map((rocket) => (
              <li key={rocket.id}>
                <p>{rocket.rocket_name}</p>
                <button type="button" className="cancel" onClick={() => handleClick(rocket.id)}>Cancel Reservation</button>
              </li>
            ))
            : <p>No rockets reserved yet</p>}
        </ul>
      </div>

      <div>
        <h2>My Dragons</h2>
        <ul className="rockets">
          {reservedDragons.length
            ? reservedDragons.map((dragon) => (
              <li key={dragon.id}>
                <p>{dragon.name}</p>
                <button type="button" className="cancel" onClick={() => handleClick(dragon.id)}>Cancel Reservation</button>
              </li>
            ))
            : <p>No dragons reserved yet</p>}
        </ul>
      </div>
    </div>
  );
};

export default Profile;
