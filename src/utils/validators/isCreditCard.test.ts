import isCreditCard from './isCreditCard';

describe('Method: isCreditCard()', () => {
  it('isCreditCard() should be a function', () => {
    expect(isCreditCard).toBeInstanceOf(Function);
  });

  it('isCreditCard("") should return false', () => {
    expect(isCreditCard('')).toBe(false);
  });

  // Valid

  it('isCreditCard("375556917985515") should return true', () => {
    const actual = isCreditCard('375556917985515');
    const expected = true;

    expect(actual).toBe(expected);
  });

  it('isCreditCard("36050234196908") should return true', () => {
    const actual = isCreditCard('36050234196908');
    const expected = true;

    expect(actual).toBe(expected);
  });

  it('isCreditCard("4716461583322103") should return true', () => {
    const actual = isCreditCard('4716461583322103');
    const expected = true;

    expect(actual).toBe(expected);
  });

  it('isCreditCard("4716-2210-5188-5662") should return true', () => {
    const actual = isCreditCard('4716-2210-5188-5662');
    const expected = true;

    expect(actual).toBe(expected);
  });

  it('isCreditCard("4929 7226 5379 7141") should return true', () => {
    const actual = isCreditCard('4929 7226 5379 7141');
    const expected = true;

    expect(actual).toBe(expected);
  });

  it('isCreditCard("5398228707871527") should return true', () => {
    const actual = isCreditCard('5398228707871527');
    const expected = true;

    expect(actual).toBe(expected);
  });

  it('isCreditCard("6283875070985593") should return true', () => {
    const actual = isCreditCard('6283875070985593');
    const expected = true;

    expect(actual).toBe(expected);
  });

  it('isCreditCard("6263892624162870") should return true', () => {
    const actual = isCreditCard('6263892624162870');
    const expected = true;

    expect(actual).toBe(expected);
  });

  it('isCreditCard("6234917882863855") should return true', () => {
    const actual = isCreditCard('6234917882863855');
    const expected = true;

    expect(actual).toBe(expected);
  });

  it('isCreditCard("6234698580215388") should return true', () => {
    const actual = isCreditCard('6234698580215388');
    const expected = true;

    expect(actual).toBe(expected);
  });

  it('isCreditCard("6226050967750613") should return true', () => {
    const actual = isCreditCard('6226050967750613');
    const expected = true;

    expect(actual).toBe(expected);
  });

  it('isCreditCard("6246281879460688") should return true', () => {
    const actual = isCreditCard('6246281879460688');
    const expected = true;

    expect(actual).toBe(expected);
  });

  it('isCreditCard("2222155765072228") should return true', () => {
    const actual = isCreditCard('2222155765072228');
    const expected = true;

    expect(actual).toBe(expected);
  });

  it('isCreditCard("2225855203075256") should return true', () => {
    const actual = isCreditCard('2225855203075256');
    const expected = true;

    expect(actual).toBe(expected);
  });

  it('isCreditCard("2720428011723762") should return true', () => {
    const actual = isCreditCard('2720428011723762');
    const expected = true;

    expect(actual).toBe(expected);
  });

  it('isCreditCard("2718760626256570") should return true', () => {
    const actual = isCreditCard('2718760626256570');
    const expected = true;

    expect(actual).toBe(expected);
  });

  it('isCreditCard("6765780016990268") should return true', () => {
    const actual = isCreditCard('6765780016990268');
    const expected = true;

    expect(actual).toBe(expected);
  });

  it('isCreditCard("4716989580001715211") should return true', () => {
    const actual = isCreditCard('4716989580001715211');
    const expected = true;

    expect(actual).toBe(expected);
  });

  it('isCreditCard("8171999927660000") should return true', () => {
    const actual = isCreditCard('8171999927660000');
    const expected = true;

    expect(actual).toBe(expected);
  });

  it('isCreditCard("8171999900000000021") should return true', () => {
    const actual = isCreditCard('8171999900000000021');
    const expected = true;

    expect(actual).toBe(expected);
  });

  // Invalid

  it('isCreditCard("foo") should return false', () => {
    const actual = isCreditCard('foo');
    const expected = false;

    expect(actual).toBe(expected);
  });

  it('isCreditCard("5398228707871528") should return false', () => {
    const actual = isCreditCard('5398228707871528');
    const expected = false;

    expect(actual).toBe(expected);
  });

  it('isCreditCard("2718760626256571") should return false', () => {
    const actual = isCreditCard('2718760626256571');
    const expected = false;

    expect(actual).toBe(expected);
  });

  it('isCreditCard("2721465526338453") should return false', () => {
    const actual = isCreditCard('2721465526338453');
    const expected = false;

    expect(actual).toBe(expected);
  });

  it('isCreditCard("2220175103860763") should return false', () => {
    const actual = isCreditCard('2220175103860763');
    const expected = false;

    expect(actual).toBe(expected);
  });

  it('isCreditCard("375556917985515999999993") should return false', () => {
    const actual = isCreditCard('375556917985515999999993');
    const expected = false;

    expect(actual).toBe(expected);
  });

  it('isCreditCard("899999996234917882863855") should return false', () => {
    const actual = isCreditCard('899999996234917882863855');
    const expected = false;

    expect(actual).toBe(expected);
  });

  it('isCreditCard("prefix6234917882863855") should return false', () => {
    const actual = isCreditCard('prefix6234917882863855');
    const expected = false;

    expect(actual).toBe(expected);
  });

  it('isCreditCard("623491788middle2863855") should return false', () => {
    const actual = isCreditCard('623491788middle2863855');
    const expected = false;

    expect(actual).toBe(expected);
  });

  it('isCreditCard("6234917882863855suffix") should return false', () => {
    const actual = isCreditCard('6234917882863855suffix');
    const expected = false;

    expect(actual).toBe(expected);
  });

  it('isCreditCard("4716989580001715213") should return false', () => {
    const actual = isCreditCard('4716989580001715213');
    const expected = false;

    expect(actual).toBe(expected);
  });
});
