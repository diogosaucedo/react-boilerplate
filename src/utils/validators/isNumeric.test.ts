import isNumeric from './isNumeric';

describe('Method: isNumeric()', () => {
  it('isNumeric() should be a function', () => {
    expect(isNumeric).toBeInstanceOf(Function);
  });

  it('isNumeric("") should return false', () => {
    expect(isNumeric('')).toBe(false);
  });

  // Valid

  it('isNumeric("123") should return true', () => {
    const actual = isNumeric('123');
    const expected = true;

    expect(actual).toBe(expected);
  });

  it('isNumeric("00123") should return true', () => {
    const actual = isNumeric('00123');
    const expected = true;

    expect(actual).toBe(expected);
  });

  it('isNumeric("-00123") should return true', () => {
    const actual = isNumeric('-00123');
    const expected = true;

    expect(actual).toBe(expected);
  });

  it('isNumeric("0") should return true', () => {
    const actual = isNumeric('0');
    const expected = true;

    expect(actual).toBe(expected);
  });

  it('isNumeric("-0") should return true', () => {
    const actual = isNumeric('-0');
    const expected = true;

    expect(actual).toBe(expected);
  });

  it('isNumeric("+123") should return true', () => {
    const actual = isNumeric('+123');
    const expected = true;

    expect(actual).toBe(expected);
  });

  it('isNumeric("123.123") should return true', () => {
    const actual = isNumeric('123.123');
    const expected = true;

    expect(actual).toBe(expected);
  });

  it('isNumeric("+000000") should return true', () => {
    const actual = isNumeric('+000000');
    const expected = true;

    expect(actual).toBe(expected);
  });

  // Invalid

  it('isNumeric(" ") should return false', () => {
    const actual = isNumeric(' ');
    const expected = false;

    expect(actual).toBe(expected);
  });

  it('isNumeric("") should return false', () => {
    const actual = isNumeric('');
    const expected = false;

    expect(actual).toBe(expected);
  });

  it('isNumeric(".") should return false', () => {
    const actual = isNumeric('.');
    const expected = false;

    expect(actual).toBe(expected);
  });
});
