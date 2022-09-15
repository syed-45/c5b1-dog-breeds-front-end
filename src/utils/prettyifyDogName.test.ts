import { prettifyDogName as prettifyDogName } from "./prettifyDogName";

test("extracts the dog breed from the url", () => {
  expect(
    prettifyDogName(
      "vizsla"
    )
  ).toBe("Vizsla");
  expect(
    prettifyDogName(
      "mountain-swiss"
    )
  ).toBe("Mountain Swiss");
  expect(
    prettifyDogName(
      "something-something"
    )
  ).toBe("Something Something");
  expect(
    prettifyDogName(
      "spaniel-blenheim-aaaa"
    )
  ).toBe("Spaniel Blenheim Aaaa");
  expect(prettifyDogName("dog-breed")).toBe("Dog Breed");
});
