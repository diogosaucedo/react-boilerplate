import onlyNumeric from './onlyNumeric';

describe('Method: onlyNumeric()', () => {
  it('onlyNumeric should be a function', () => {
    expect(onlyNumeric).toBeInstanceOf(Function);
  });

  it('onlyNumeric("") should return ""', () => {
    const actual = onlyNumeric('');
    const expected = '';

    expect(actual).toEqual(expected);
  });

  it('onlyNumeric("123") should return "123"', () => {
    const actual = onlyNumeric('123');
    const expected = '123';

    expect(actual).toEqual(expected);
  });

  it('onlyNumeric("123456789") should return "123456789"', () => {
    const actual = onlyNumeric('123456789');
    const expected = '123456789';

    expect(actual).toEqual(expected);
  });

  it('onlyNumeric("Aa123456789Zz") should return "123456789"', () => {
    const actual = onlyNumeric('Aa123456789Zz');
    const expected = '123456789';

    expect(actual).toEqual(expected);
  });

  it('onlyNumeric("123ASDasdCXZ456") should return "123456"', () => {
    const actual = onlyNumeric('123ASDasdCXZ456');
    const expected = '123456';

    expect(actual).toEqual(expected);
  });

  it('onlyNumeric("1!@!#$DFHNH}{^3") should return "13"', () => {
    const actual = onlyNumeric('1!@!#$DFHNH}{^3');
    const expected = '13';

    expect(actual).toEqual(expected);
  });
});
