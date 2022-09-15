import "./DogCard.css";
import { Button, Card } from "react-bootstrap";
import handleVote from "../../../utils/handleVote";

interface DogCardProps {
  breedname: string;
  imageURL: string;
  setRefresh: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function DogCard(props: DogCardProps): JSX.Element {
  const handleClick = (): void => {
    handleVote(props.breedname).then(() => props.setRefresh((prev) => !prev));
  };
  return (
    <>
      <Card style={{ width: "17rem", textAlign: "center", height: "70vh" }}>
        <Card.Img
          variant="top"
          src={props.imageURL}
          style={{ width: "17rem", height: "20rem" }}
        />
        <Card.Body style={{ border: "1px solid lightgrey" }}>
          <Card.Title></Card.Title>
          <Card.Text style={{ color: "black" }}>{props.breedname}</Card.Text>
          <Button
            variant="primary"
            style={{ marginBottom: "8px" }}
            onClick={handleClick}
          >
            Vote
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}
