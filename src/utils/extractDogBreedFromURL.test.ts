import { extractDogBreedFromURL } from "./extractDogBreedFromURL";

test("extracts the dog breed from the url", () => {
  expect(
    extractDogBreedFromURL(
      "https://images.dog.ceo/breeds/vizsla/n02100583_125.jpg"
    )
  ).toBe("vizsla");
  expect(
    extractDogBreedFromURL(
      "https://images.dog.ceo/breeds/mountain-swiss/n02107574_2325.jpg"
    )
  ).toBe("mountain-swiss");
  expect(
    extractDogBreedFromURL(
      "https://images.dog.ceo/breeds/spaniel-blenheim/n02086646_1586.jpg"
    )
  ).toBe("spaniel-blenheim");
  expect(
    extractDogBreedFromURL(
      "https://images.dog.ceo/breeds/spaniel-blenheim-aaaa/n02086646_1586.jpg"
    )
  ).toBe("spaniel-blenheim-aaaa");
});
