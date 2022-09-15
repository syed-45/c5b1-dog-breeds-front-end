export function prettifyDogName(hyphenatedString: string): string{
    const splittedBreedNameArray = hyphenatedString.split('-');
    const titleCasedArray = splittedBreedNameArray.map((seperatedBreedName) => {
        return titleCase(seperatedBreedName)
    })

    const prettifiedDogName = titleCasedArray.join(' ')
    return prettifiedDogName
}

function titleCase(str: string): string{
    return str[0].toUpperCase() + str.slice(1)
}
