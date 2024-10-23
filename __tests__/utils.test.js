import { countSyllables } from "../src/js/utils";

describe('countSyllables', () => {
  let haiku;

  beforeEach(() => {
    haiku = {
      1: "Leaves, then snow, then rain",
      2: "Stuff's always falling on me",
      3: "Except in summer"
    };
  });

  test('returns zero on empty string', () => {
    expect(countSyllables("")).toEqual(0);
  });

  test('returns one on single one syllable word', () => {
    expect(countSyllables("side")).toEqual(1);
  });

  test('returns correct count of mutlisyllable words', () => {
    expect(countSyllables("proselytizing")).toEqual(4);
  });

  test('returns correct count for multiple words', () => {
    expect(countSyllables("they mutter take your claws and climb")).toEqual(8);
  });
});