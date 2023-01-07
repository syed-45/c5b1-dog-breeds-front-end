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
      <Card >
        <Card.Img
          variant="top"
          src={props.imageURL}
          style={{width:"300px",height:"300px",objectFit:"cover"}}
        />
        <Card.Body  style={{textAlign:"center"}}>
          <Card.Title></Card.Title>
          <Card.Text >{props.breedname}</Card.Text>
          <Button
            variant="primary"            
            onClick={handleClick}
            style={{width:"70px",height:"40px"}}
          >
            Vote
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}
