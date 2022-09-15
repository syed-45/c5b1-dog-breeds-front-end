export function extractDogBreedFromURL(url: string): string{
  const afterBreedsIndexToEnd = url.slice(30, url.length);
  const hyphenatedBreedName = afterBreedsIndexToEnd.slice(
    0,
    afterBreedsIndexToEnd.indexOf("/")
  );

  return hyphenatedBreedName
}