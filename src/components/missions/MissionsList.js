import MissionItem from './MissionItem';

const MissionsList = () => {
  const missionsArray = [
    {
      title: 'Thaicom',
      description: 'The quick old dog jumped over the lazy dog. The quick old dog jumped over the lazy dog',
    },
    {
      title: 'Telstar',
      description: 'The quick old dog jumped over the lazy dog. The quick old dog jumped over the lazy dog',
    },
  ];
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
