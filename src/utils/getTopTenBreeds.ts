import axios from "axios";
import { dogVote } from "../types";

export default async function getTopTenBreeds(): Promise<dogVote[]> {
  try {
    const response = await axios.get(
      "https://dog-breed-voting-app-backend.onrender.com/leaderboard"
    );
    const topTenBreeds: dogVote[] = response.data;
    return topTenBreeds;
  } catch (error) {
    console.error(error);
    return [];
  }
}
