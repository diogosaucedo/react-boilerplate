import isAlpha from './isAlpha';

describe('Method: isAlpha()', () => {
  it('isAlpha() should be a function ', () => {
    expect(isAlpha).toBeInstanceOf(Function);
  });

  it('isAlpha("") should return false', () => {
    const actual = isAlpha('');
    const expected = false;

    expect(actual).toBe(expected);
  });

  // Valid

  it('isAlpha("A") should return true', () => {
    const actual = isAlpha('A');
    const expected = true;

    expect(actual).toBe(expected);
  });

  it('isAlpha("a") should return true', () => {
    const actual = isAlpha('a');
    const expected = true;

    expect(actual).toBe(expected);
  });

  it('isAlpha("abc") should return true', () => {
    const actual = isAlpha('abc');
    const expected = true;

    expect(actual).toBe(expected);
  });

  it('isAlpha("ABC") should return true', () => {
    const actual = isAlpha('ABC');
    const expected = true;

    expect(actual).toBe(expected);
  });

  it('isAlpha("FoObar") should return true', () => {
    const actual = isAlpha('FoObar');
    const expected = true;

    expect(actual).toBe(expected);
  });

  // Invalid

  it('isAlpha("abc1") should return false', () => {
    const actual = isAlpha('abc1');
    const expected = false;

    expect(actual).toBe(expected);
  });

  it('isAlpha("  foo  ") should return false', () => {
    const actual = isAlpha('  foo  ');
    const expected = false;

    expect(actual).toBe(expected);
  });

  it('isAlpha("ÄBC") should return false', () => {
    const actual = isAlpha('ÄBC');
    const expected = false;

    expect(actual).toBe(expected);
  });

  it('isAlpha("FÜübar") should return false', () => {
    const actual = isAlpha('FÜübar');
    const expected = false;

    expect(actual).toBe(expected);
  });

  it('isAlpha("Jön") should return false', () => {
    const actual = isAlpha('Jön');
    const expected = false;

    expect(actual).toBe(expected);
  });

  it('isAlpha("Heiß") should return false', () => {
    const actual = isAlpha('Heiß');
    const expected = false;

    expect(actual).toBe(expected);
  });
});
