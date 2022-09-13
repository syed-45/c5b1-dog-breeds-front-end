import LeaderboardEntry from "./LeaderboardEntry";

export default function LeaderboardList():JSX.Element {
    return (
        <>
            <p>leaderboard list</p>
            <ol id= "leaderboard_list">
                <li>afghan hound</li>
                <li>beagle</li>
                <li>labrador</li>
                <li>basset hound</li>
                <li>corgi</li>
            </ol>
            <LeaderboardEntry />
        </>
    )
}