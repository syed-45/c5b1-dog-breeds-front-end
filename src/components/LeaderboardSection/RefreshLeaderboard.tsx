import { dogVote } from "../../types";
import getTopTenBreeds from "../../utils/getTopTenBreeds";

interface RefreshLeaderboardProps {
  leaderboard: dogVote[];
  setLeaderboard: (dogVotes : dogVote[]) => void;
}

export default function RefreshLeaderboard({ leaderboard, setLeaderboard }: RefreshLeaderboardProps): JSX.Element {
  const handleRefresh = (): void => {
    getTopTenBreeds().then((topTen) => {
      setLeaderboard(topTen)
      console.log(topTen)
    })
  }
  return (
    <>
      <button onClick={handleRefresh}>refresh leaderboard</button>
    </>
  );
}
