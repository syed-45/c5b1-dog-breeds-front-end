import GoToLeaderboard from "./GoToLeaderboard";
import VoteSelector from "./VoteSelector";

export default function VoteSection():JSX.Element {
    return (
        <>
            <h1>Dog Breed Vote</h1>
            <VoteSelector />
            <GoToLeaderboard />
        </>
    )
}