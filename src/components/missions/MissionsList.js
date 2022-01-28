import React from 'react';
import { useSelector } from 'react-redux';
import MissionItem from './MissionItem';

const MissionsList = () => {
  const missionsArray = useSelector((state) => state.missionsReducer);

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
