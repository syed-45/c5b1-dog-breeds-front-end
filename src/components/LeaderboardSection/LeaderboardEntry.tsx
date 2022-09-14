import { dogVote } from "../../types";

interface LeaderboardEntryProps {
  breedNameScore : dogVote
}

export default function LeaderboardEntry({
  breedNameScore
}: LeaderboardEntryProps): JSX.Element {
  const {breed_name, votes} = breedNameScore
  return <li>leaderboard entry: {breed_name} : score {votes}</li>;
}
