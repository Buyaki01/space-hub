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

RocketsItem.defaultProps = {
  handleClick() {},
  wiki: '',
  desc: '',
  name: '',
  image: '',
  reserved: '',
  id: 0,
};

RocketsItem.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  image: PropTypes.string,
  reserved: PropTypes.string,
  desc: PropTypes.string,
  wiki: PropTypes.string,
  handleClick: PropTypes.func,
};

export default RocketsItem;
