import { useEffect} from "react";
import { dogVote } from "../../types";
import getTopTenBreeds from "../../utils/getTopTenBreeds";
import LeaderboardEntry from "./LeaderboardEntry";

interface LeaderboardListProps {
  leaderboard: dogVote[];
  setLeaderboard: (dogVotes : dogVote[]) => void;
}


export default function LeaderboardList({ leaderboard, setLeaderboard }: LeaderboardListProps): JSX.Element {


  useEffect(() => {
    getTopTenBreeds().then((topTen) => {
      setLeaderboard(topTen)
      console.log(topTen)
    })
  }, [setLeaderboard])

  return (
    <>
      <p>leaderboard list</p>
      <ol id="leaderboard_list">
        {leaderboard.map((breedNameScore) => (
          <LeaderboardEntry
            breedNameScore={breedNameScore}
            key={breedNameScore.id}
          />
        ))}
      </ol>
    </>
  );
}
