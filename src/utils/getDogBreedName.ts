import { extractDogBreedFromURL } from "./extractDogBreedFromURL";
import { prettifyDogName } from "./prettifyDogName";

export function getDogBreedName(url: string): string {
  const extractedDogBreed = extractDogBreedFromURL(url);
  const prettifiedDogBreed = prettifyDogName(extractedDogBreed);
  return prettifiedDogBreed;
}
