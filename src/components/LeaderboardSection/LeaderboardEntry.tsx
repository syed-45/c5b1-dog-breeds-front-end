import { dogVote } from "../../types";

interface LeaderboardEntryProps {
  breedNameScore: dogVote;
}

export default function LeaderboardEntry({
  breedNameScore,
}: LeaderboardEntryProps): JSX.Element {
  const { breedname, votes } = breedNameScore;
  return (
    <li>
      <mark>
        {breedname} - {votes} votes
      </mark>
    </li>
  );
}
