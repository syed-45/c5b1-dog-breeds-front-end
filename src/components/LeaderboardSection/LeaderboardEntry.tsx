interface LeaderboardEntryProps {
  name: string;
  vote : number;
}

export default function LeaderboardEntry({
  name,vote
}: LeaderboardEntryProps): JSX.Element {
  return <li>leaderboard entry: {name} : score {vote}</li>;
}
