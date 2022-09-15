import axios from "axios";

export default async function handleVote(breedName: string): Promise<void> {
  await axios.post("https://c5b1-dog-breeds.herokuapp.com/votes/", {
    breedName: breedName,
  });
}
