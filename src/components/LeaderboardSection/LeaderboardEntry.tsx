import { dogVote } from "../../types";

interface LeaderboardEntryProps {
  breedNameScore: dogVote;
}

export default function LeaderboardEntry({
  breedNameScore,
}: LeaderboardEntryProps): JSX.Element {
  const { breed_name, votes } = breedNameScore;
  return (
    <li>
      <mark>
        {breed_name} - {votes} votes
      </mark>
    </li>
  );
}
