import DogNameLabel from "./DogNameLabel";
import DogPhoto from "./DogPhoto";
import "./DogCard.css";

export default function DogCard(): JSX.Element {
  return (
    <>
      <div className="dog_card">
        <DogPhoto />
        <DogNameLabel />
        <button>vote</button>
      </div>
    </>
  );
}
