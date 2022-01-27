import { useDispatch, useSelector } from 'react-redux';
import { toggleDragonReservation } from '../../redux/dragons/dragonReducer';
import './DragonsPage.scss';

const DragonsPage = () => {
  const dispatch = useDispatch();
  const dragons = useSelector(({ dragonsReducer }) => dragonsReducer.dragons);

  const handleClick = (id) => {
    dispatch(toggleDragonReservation(id));
  };

  return (
    <div className="rockets-container">
      {dragons.length ? dragons.map((dragon) => (
        <li key={dragon.id} className="rocket_list">
          <div><img src={dragon.flickr_images[0]} alt="dragon" /></div>
          <div>
            <h2>{dragon.name}</h2>
            <p>
              {dragon.reserved && <span>Reserved</span>}
              {dragon.description}
              <a href={dragon.wikipedia} target="_blank" rel="noreferrer noopener">Read More...</a>
            </p>
            {!dragon.reserved && <button type="button" onClick={() => handleClick(dragon.id)}>Reserve Dragon</button>}
            {dragon.reserved && <button type="button" className="cancel" onClick={() => handleClick(dragon.id)}>Cancel Reservation</button>}
          </div>
        </li>
      )) : 'No Data Available'}
    </div>
  );
};

export default DragonsPage;
