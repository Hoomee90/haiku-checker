import { countSyllables, convertLines } from "../src/js/utils";

describe('countSyllables', () => {

  test('returns zero on empty string', () => {
    expect(countSyllables("")).toEqual(0);
  });

  test('returns one on single one syllable word', () => {
    expect(countSyllables("side")).toEqual(1);
  });

  test('returns correct count of multisyllable words', () => {
    expect(countSyllables("proselytizing")).toEqual(4);
  });

  test('returns correct count for multiple words', () => {
    expect(countSyllables("they mutter take your claws and climb")).toEqual(8);
  });
});

describe('countSyllables', () => {
  let haiku;

  beforeEach(() => {
    haiku = [
      "Leafs, then snow, then rain",
      "Stuff's always falling on me",
      "Except in summer"
    ];
  });

  test('executes countSyllables on each element', () => {
    expect(convertLines(["", "", ""])).toEqual([0, 0, 0]);
  });

  test('returns array of counted syllables', () => {
    expect(convertLines(haiku)).toEqual([5, 7, 5]);
  });
});