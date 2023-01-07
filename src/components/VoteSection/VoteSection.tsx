import GoToLeaderboard from "./GoToLeaderboard";
import VoteSelector from "./VoteSelector";
import "./VoteSection.css";

export default function VoteSection(): JSX.Element {
  return (
    <div id="vote_section">
      <h1>Vote for the cutest dog breed!</h1>
      <VoteSelector />
      <GoToLeaderboard />
    </div>
  );
}
