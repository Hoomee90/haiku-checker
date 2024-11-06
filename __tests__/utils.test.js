import { mapArray, checkHaiku, countSyllables } from "../src/js/utils";

describe('countSyllables', () => {

  test('zero on empty string', () => {
    expect(countSyllables("")).toEqual(0);
  });

  test('one on single one syllable word', () => {
    expect(countSyllables("side")).toEqual(1);
  });

  test('correct count of polysyllabic words', () => {
    expect(countSyllables("proselytizing")).toEqual(4);
  });

  test('correct count for multiple words', () => {
    expect(countSyllables("they mutter take your claws and climb")).toEqual(8);
  });
});

describe('mapArray', () => {
  let multiplyEach;

  beforeEach(() => {
    multiplyEach = mapArray((el) => el * 2);
  });

  test('returns function', () => {
    expect(typeof multiplyEach).toEqual("function");
  });

  test('each element has map callback called on it', () => {
    expect(multiplyEach([1, 2, 3])).toEqual([2, 4, 6]);
  });
});

describe('checkHaiku', () => {

  test('checks haiku length', () => {
    expect(checkHaiku(["wrong", "bad"])).toEqual("haiku must have exactly 3 lines, not 2");
  });
});