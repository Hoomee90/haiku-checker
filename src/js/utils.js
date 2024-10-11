export const syllableCounter = (haikuLine) => {
  const regex = new RegExp(/[aiouy]+e*|e(?!d$|ly).|[td]ed|le$/, "ig");
  const extractedSyllables = haikuLine.match(regex) ?? [];
  return extractedSyllables.length
}