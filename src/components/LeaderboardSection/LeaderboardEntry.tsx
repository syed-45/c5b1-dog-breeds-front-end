import { dogVote } from "../../types";

interface LeaderboardEntryProps {
  breedNameScore: dogVote;
}

export default function LeaderboardEntry({
  breedNameScore,
}: LeaderboardEntryProps): JSX.Element {
  const { breedName, votes } = breedNameScore;
  return (
    <li>
      <mark>
        {breedName} - {votes} votes
      </mark>
    </li>
  );
}
