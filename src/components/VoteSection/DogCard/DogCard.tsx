import "./DogCard.css";
import { Button, Card } from "react-bootstrap";
import handleVote from "../../../utils/handleVote";

interface DogCardProps {
  dogBreedName: string;
  imageURL: string;
}

export default function DogCard(props: DogCardProps): JSX.Element {
  return (
    <>
      <Card style={{ width: "17rem", textAlign: "center" }}>
        <Card.Img
          variant="top"
          src={props.imageURL}
          style={{ maxWidth: "17rem" }}
        />
        <Card.Body style={{ border: "1px solid lightgrey" }}>
          <Card.Title></Card.Title>
          <Card.Text>{props.dogBreedName}</Card.Text>
          <Button
            variant="primary"
            style={{ marginBottom: "8px" }}
            onClick={() => handleVote(props.dogBreedName)}
          >
            Vote
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}
