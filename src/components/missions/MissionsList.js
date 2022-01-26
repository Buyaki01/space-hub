import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MissionItem from './MissionItem';
import { getMissionsFromApi } from '../../redux/missions/missionsReducer';

const MissionsList = () => {
  const missionsArray = useSelector((state) => state.missionsReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMissionsFromApi());
  }, [dispatch]);
  return (
    <section>
      <table className="missionItemContainer">
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>

        {missionsArray.map((mission) => (
          <MissionItem key={mission.id} mission={mission} />
        ))}
      </table>
    </section>
  );
};
export default MissionsList;
