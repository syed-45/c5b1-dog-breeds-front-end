import DogCard from "./DogCard/DogCard";

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
