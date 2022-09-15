import "./DogCard.css";
import { Button, Card } from "react-bootstrap";

const tempPhotoPlaceholder =
  "https://images.dog.ceo/breeds/vizsla/n02100583_125.jpg";

export default function DogCard(): JSX.Element {
  return (
    <>
      <Card style={{ width: "17rem", textAlign: "center" }}>
        <Card.Img
          variant="top"
          src={tempPhotoPlaceholder}
          style={{ maxWidth: "17rem" }}
        />
        <Card.Body style={{ border: "1px solid lightgrey" }}>
          <Card.Title></Card.Title>
          <Card.Text>Breed</Card.Text>
          <Button variant="primary" style={{ marginBottom: "8px" }}>
            Vote
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}
