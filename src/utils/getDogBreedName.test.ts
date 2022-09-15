import { getDogBreedName } from "./getDogBreedName";

test("extracts the dog breed from the url", () => {
  expect(
    getDogBreedName("https://images.dog.ceo/breeds/vizsla/n02100583_125.jpg")
  ).toBe("Vizsla");
  expect(
    getDogBreedName(
      "https://images.dog.ceo/breeds/mountain-swiss/n02107574_2325.jpg"
    )
  ).toBe("Mountain Swiss");
  expect(
    getDogBreedName(
      "https://images.dog.ceo/breeds/mountain-swiss/n02107574_2325.jpg"
    )
  ).toBe("Mountain Swiss");
  expect(
    getDogBreedName(
      "https://images.dog.ceo/breeds/spaniel-blenheim/n02086646_1586.jpg"
    )
  ).toBe("Spaniel Blenheim");
});
