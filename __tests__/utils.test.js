import { syllableCounter } from "../src/js/utils";

describe('syllableCounter', () => {
  let haiku;

  beforeEach(() => {
    haiku = {
      1: "Leaves, then snow, then rain",
      2: "Stuff's always falling on me",
      3: "Except in summer"
    };
  });

  test('returns zero on empty string', () => {
    expect(syllableCounter("")).toEqual(0);
  });

  test('returns one on single one syllable word', () => {
    expect(syllableCounter("side")).toEqual(1);
  });

  test('returns correct count of mutlisyllable words', () => {
    expect(syllableCounter("proselytizing")).toEqual(4);
  });

  test('returns correct count for multiple words', () => {
    expect(syllableCounter("they mutter take your claws and climb")).toEqual(8);
  });
});