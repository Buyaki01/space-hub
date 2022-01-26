import PropTypes from 'prop-types';

const MissionItem = (props) => {
  const { mission: { title, description } } = props;
  return (
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
  );
};
MissionItem.propTypes = {
  mission: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};
export default MissionItem;
