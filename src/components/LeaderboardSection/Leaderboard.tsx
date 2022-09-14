import { useState } from "react";
import { dogVote } from "../../types";
import LeaderboardList from "./LeaderboardList";
import RefreshLeaderboard from "./RefreshLeaderboard";

export default function Leaderboard(): JSX.Element {
  
  const [leaderboard, setLeaderboard] = useState<dogVote[]>([])

  return (
    <>
      <LeaderboardList leaderboard={leaderboard} setLeaderboard={setLeaderboard}/>
      <RefreshLeaderboard leaderboard={leaderboard} setLeaderboard={setLeaderboard}/>
    </>
  );
}
