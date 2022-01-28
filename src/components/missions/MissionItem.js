import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission } from '../../redux/missions/missionsReducer';

const MissionItem = (props) => {
  const {
    mission: {
      id, title, description, membership,
    },
  } = props;
  const dispatch = useDispatch();
  const changeMembership = () => {
    dispatch(joinMission(id));
  };
  return (
    <tbody>
      <tr className="border">
        <td className="border">
          {title}
        </td>
        <td className="border description">
          {description}
        </td>
        <td className="border status">
          {membership ? (
            <p className="activeMember"> Active Member </p>
          ) : (
            <p className="notMember"> Not A Member </p>
          )}
        </td>
        <td className="border status">
          {membership ? (
            <button type="button" onClick={changeMembership} className="leaveMissionBtn"> Leave Mission </button>
          ) : (<button type="button" onClick={changeMembership} className="joinMissionBtn"> Join Mission </button>)}

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
    membership: PropTypes.bool,
  }).isRequired,
};
export default MissionItem;
