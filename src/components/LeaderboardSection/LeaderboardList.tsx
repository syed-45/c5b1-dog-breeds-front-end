import { useEffect } from "react";
import { dogVote } from "../../types";
import "./LeaderboardList.scss";
import getTopTenBreeds from "../../utils/getTopTenBreeds";
import LeaderboardEntry from "./LeaderboardEntry";
import RefreshLeaderboard from "./RefreshLeaderboard";

interface LeaderboardListProps {
  leaderboard: dogVote[];
  setLeaderboard: (dogVotes: dogVote[]) => void;
}

export default function LeaderboardList({
  leaderboard,
  setLeaderboard,
}: LeaderboardListProps): JSX.Element {
  useEffect(() => {
    getTopTenBreeds().then((topTen) => {
      setLeaderboard(topTen);
      console.log(topTen);
    });
  }, [setLeaderboard]);

  return (
    <>
      <p>leaderboard list</p>
      <div className="leaderboard">
        <ol id="leaderboard_list">
          {leaderboard.map((breedNameScore) => (
            <LeaderboardEntry
              breedNameScore={breedNameScore}
              key={breedNameScore.id}
            />
          ))}
        </ol>
      </div>
      <RefreshLeaderboard
          leaderboard={leaderboard}
          setLeaderboard={setLeaderboard}
        />
    </>
  );
}
