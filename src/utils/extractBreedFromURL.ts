export function extractBreedFromUrl(url: string): string {
  const afterBreedsIndexToEnd = url.slice(30, url.length);
  const breed = afterBreedsIndexToEnd.slice(
    0,
    afterBreedsIndexToEnd.indexOf("/")
  );
  const arrayOfBreedSplitted = breed.split("-");
  const capitalisedArray: string[] = [];
  arrayOfBreedSplitted.map((breedElement) => {
    return capitalisedArray.push(
      breedElement[0].toUpperCase + breedElement.slice(1, breedElement.length)
    );
  });
  const capitalisedBreedWithSpaces = capitalisedArray.join(" ");

  return breed.includes("-")
    ? capitalisedBreedWithSpaces
    : breed[0].toUpperCase() + breed.slice(1, breed.length);
  // return breed
}

// "https://images.dog.ceo/breeds/vizsla/n02100583_125.jpg"
// "https://images.dog.ceo/breeds/mountain-swiss/n02107574_2325.jpg"

// console.log(extractBreedFromUrl("https://images.dog.ceo/breeds/vizsla/n02100583_125.jpg"))
