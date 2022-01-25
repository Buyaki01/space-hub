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
      {missionsArray.map((mission) => (
        <MissionItem key={mission.id} mission={mission} />
      ))}
    </section>
  );
};
export default MissionsList;
