import { useEffect, useState } from "react";
import { dogVote } from "../../types";
import getTopTenBreeds from "../../utils/getTopTenBreeds";
import LeaderboardEntry from "./LeaderboardEntry";

export default function LeaderboardList(): JSX.Element {

  const [leaderboard, setLeaderboard] = useState<dogVote[]>([])

  useEffect(() => {
    getTopTenBreeds().then((topTen) => {
      setLeaderboard(topTen)
      console.log(topTen)
    })
  }, [])

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
