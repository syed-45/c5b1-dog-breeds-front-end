import "./DogCard.css";
import { Button, Card } from "react-bootstrap";
import handleVote from "../../../utils/handleVote";

interface DogCardProps {
  dogBreedName: string;
  imageURL: string;
  setRefresh: React.Dispatch<React.SetStateAction<boolean>>
}

export default function DogCard(props: DogCardProps): JSX.Element {
  const handleClick = ():void => {
    handleVote(props.dogBreedName)
    .then(() =>
      props.setRefresh((prev) => !prev)
    )
  }
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
            onClick={handleClick}
          >
            Vote
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}
