import axios from "axios";
import { dogVote } from "../types";

export default async function getTopTenBreeds(): Promise<dogVote[]> {
  try {
    const response = await axios.get(
      "https://c5b1-dog-breeds.herokuapp.com/leaderboard"
    );
    const topTenBreeds: dogVote[] = response.data;
    return topTenBreeds;
  } catch (error) {
    console.error(error);
    return [];
  }
}
