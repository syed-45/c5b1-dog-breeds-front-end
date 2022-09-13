interface LeaderboardEntryProps {
  name: string;
}

export default function LeaderboardEntry({
  name,
}: LeaderboardEntryProps): JSX.Element {
  return <li>leaderboard entry: {name} : score</li>;
}
