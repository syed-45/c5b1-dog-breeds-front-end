import GoToLeaderboard from "./GoToLeaderboard";
import VoteSelector from "./VoteSelector";
import './VoteSection.css'

export default function VoteSection(): JSX.Element {
  return (
    <div id="vote_section">
      <h1>Dog Breed Vote</h1>
      <VoteSelector />
      <GoToLeaderboard />
    </div>
  );
}
