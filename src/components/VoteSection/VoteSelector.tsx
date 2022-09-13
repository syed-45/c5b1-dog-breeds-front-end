import DogCard from "./DogCard/DogCard";
import "./VoteSelector.css";

export default function VoteSelector(): JSX.Element {
  return (
    <>
      <p>VoteSelector</p>
      <section id="vote_selector">
        <DogCard />
        <DogCard />
      </section>
    </>
  );
}
