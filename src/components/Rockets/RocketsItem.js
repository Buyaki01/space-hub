import PropTypes from 'prop-types';

const RocketsItem = ({
  id, image, name, reserved, desc, wiki, handleClick,
}) => (
  <>
    <div><img src={image} alt="rocket" /></div>
    <div>
      <h2>{name}</h2>
      <p>
        {reserved && <span>Reserved</span>}
        {desc}
        <a href={wiki} target="_blank" rel="noreferrer noopener">Read More...</a>
      </p>
      {!reserved && <button type="button" onClick={() => handleClick(id)}>Reserve Rocket</button>}
      {reserved && <button type="button" className="cancel" onClick={() => handleClick(id)}>Cancel Reservation</button>}
    </div>
  </>
);

RocketsItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  reserved: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  wiki: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default RocketsItem;
