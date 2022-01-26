import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission } from '../../redux/missions/missionsReducer';

const MissionItem = (props) => {
  const { mission: { id, title, description, membership } } = props;
  const dispatch = useDispatch();
  const changeMembership = () => {
    dispatch(joinMission(id));
  };
  return (
    <tbody>
      <tr>
        <td>
          {title}
        </td>
        <td>
          {description}
        </td>
        <td>
          <button type="button" onClick={changeMembership}> Not a member </button>
        </td>
        <td>
          <button type="button" onClick={changeMembership}> Join Mission </button>
        </td>
      </tr>
    </tbody>
  );
};
MissionItem.propTypes = {
  mission: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    // membership: PropTypes.bool,
  }).isRequired,
};
export default MissionItem;
