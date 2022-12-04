import isAlphanumeric from './isAlphanumeric';

describe('Method: isAlphanumeric()', () => {
  it('isAlphanumeric() should be a function', () => {
    expect(isAlphanumeric).toBeInstanceOf(Function);
  });

  it('isAlphanumeric("") should return false', () => {
    const actual = isAlphanumeric('');
    const expected = false;

    expect(actual).toBe(expected);
  });

  // Valid

  it('isAlphanumeric("abc123") should return true', () => {
    const actual = isAlphanumeric('abc123');
    const expected = true;

    expect(actual).toBe(expected);
  });

  it('isAlphanumeric("ABC11") should return true', () => {
    const actual = isAlphanumeric('ABC11');
    const expected = true;

    expect(actual).toBe(expected);
  });

  // Invalid

  it('isAlphanumeric("abc ") should return false', () => {
    const actual = isAlphanumeric('abc ');
    const expected = false;

    expect(actual).toBe(expected);
  });

  it('isAlphanumeric("foo!!") should return false', () => {
    const actual = isAlphanumeric('foo!!');
    const expected = false;

    expect(actual).toBe(expected);
  });

  it('isAlphanumeric("ÄBC") should return false', () => {
    const actual = isAlphanumeric('ÄBC');
    const expected = false;

    expect(actual).toBe(expected);
  });

  it('isAlphanumeric("FÜübar") should return false', () => {
    const actual = isAlphanumeric('FÜübar');
    const expected = false;

    expect(actual).toBe(expected);
  });

  it('isAlphanumeric("Jön") should return false', () => {
    const actual = isAlphanumeric('Jön');
    const expected = false;

    expect(actual).toBe(expected);
  });
});
