export const countSyllables = (haikuLine) => {
  const regex = new RegExp(/[aiouy]+e*|e(?!d$|ly)\S|[td]ed|le$|((?<!')\b\w{1,2}\b)$/, "ig");
  const extractedSyllables = haikuLine.match(regex) ?? [];
  return extractedSyllables.length
}

export const mapArray = (mapCallback) => {
  return (array) => array.map(mapCallback);
}

export const checkHaiku = (haiku) => {
  const toSyllables = mapArray(countSyllables);
  const haikuSyllables = toSyllables(haiku)

  switch (true) {
    case haikuSyllables.length !== 3:
      return `haiku must have exactly 3 lines, not ${haikuSyllables.length}`;
    case haikuSyllables[0] !== 5:
      return `the first line must have 5 syllables, not ${haikuSyllables[0]}`
    case haikuSyllables[1] !== 7:
      return `the second line must have 7 syllables, not ${haikuSyllables[1]}`
    case haikuSyllables[2] !== 5:
      return `the third line must have 5 syllables, not ${haikuSyllables[2]}`
    default:
      return `this is a correct haiku`
  }
}