import axios from "axios";

export default async function handleVote(breedName: string): Promise<void> {
  await axios.post("https://dog-breed-voting-app-backend.onrender.com/votes", {
    breedName: breedName,
  });
}
