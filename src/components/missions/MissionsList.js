import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MissionItem from './MissionItem';
import { getMissionsFromApi } from '../../redux/missions/missionsReducer';

const MissionsList = () => {
  const missionsArray = useSelector((state) => state.missionsReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    if (missionsArray.length === 0) {
      dispatch(getMissionsFromApi());
    }
  }, [dispatch]);
  return (
    <section>
      <table className="missionItemContainer">
        <thead>
          <tr className="border">
            <th className="border">Mission</th>
            <th className="border">Description</th>
            <th className="border">Status</th>
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
