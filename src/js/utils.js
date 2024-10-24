import { syllable } from "syllable";

export const countSyllables = (string) => {
  return syllable(string)
}

export const mapArray = (mapCallback) => {
  return (array) => array.map(mapCallback);
}