export const countSyllables = (haikuLine) => {
  const regex = new RegExp(/[aiouy]+e*|e(?!d$|ly)\S|[td]ed|le$|((?<!')\b\w{1,2}\b)$/, "ig");
  const extractedSyllables = haikuLine.match(regex) ?? [];
  return extractedSyllables.length
}