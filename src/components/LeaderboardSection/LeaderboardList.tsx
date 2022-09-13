import LeaderboardEntry from "./LeaderboardEntry";

export default function LeaderboardList(): JSX.Element {
  const tempDogListPlaceholder = [
    "afghan hound",
    "beagle",
    "labrador",
    "basset hound",
    "corgi",
  ];

  return (
    <>
      <p>leaderboard list</p>
      <ol id="leaderboard_list">
        {tempDogListPlaceholder.map((name) => (
          <LeaderboardEntry
            name={name}
            key={tempDogListPlaceholder.indexOf(name)}
          />
        ))}
      </ol>
    </>
  );
}
