import isEmpty from './isEmpty';

describe('Method: isEmpty()', () => {
  it('isEmpty() should be a function', () => {
    expect(isEmpty).toBeInstanceOf(Function);
  });

  // Valid

  it('isEmpty("") should return true', () => {
    const actual = isEmpty('');
    const expected = true;

    expect(actual).toBe(expected);
  });

  // Invalid

  it('isEmpty("foo") should return false', () => {
    const actual = isEmpty('foo');
    const expected = false;

    expect(actual).toBe(expected);
  });

  it('isEmpty("2") should return false', () => {
    const actual = isEmpty('2');
    const expected = false;

    expect(actual).toBe(expected);
  });

  it('isEmpty("Brasil") should return false', () => {
    const actual = isEmpty('Brasil');
    const expected = false;

    expect(actual).toBe(expected);
  });
});
