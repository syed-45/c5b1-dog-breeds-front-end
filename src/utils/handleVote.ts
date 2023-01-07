import axios from "axios";

export default async function handleVote(breedName: string): Promise<void> {
  await axios.post("https://c5b1-dog-breeds-backend.up.railway.app/votes", {
    breedName: breedName,
  });
}
