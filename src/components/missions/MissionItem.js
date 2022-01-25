import PropTypes from 'prop-types';

const MissionItem = (props) => {
  const { mission: { title, description } } = props;
  return (
    <table className="missionItemContainer">
      <thead>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            {title}
          </td>
          <td>
            {description}
          </td>
          <td> Not a member </td>
          <td> Join Mission </td>
        </tr>
      </tbody>
    </table>
  );
};
MissionItem.propTypes = {
  mission: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};
export default MissionItem;
