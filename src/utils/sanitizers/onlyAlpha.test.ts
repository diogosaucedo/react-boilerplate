import onlyAlpha from './onlyAlpha';

describe('Method: onlyAlpha()', () => {
  it('onlyAlpha should be a function', () => {
    expect(onlyAlpha).toBeInstanceOf(Function);
  });

  it('onlyAlpha("") should return ""', () => {
    const actual = onlyAlpha('');
    const expected = '';

    expect(actual).toEqual(expected);
  });

  it('onlyAlpha("Bacon") should return "Bacon"', () => {
    const actual = onlyAlpha('Bacon');
    const expected = 'Bacon';

    expect(actual).toEqual(expected);
  });

  it('onlyAlpha("Feijoada") should return "Feijoada"', () => {
    const actual = onlyAlpha('Feijoada');
    const expected = 'Feijoada';

    expect(actual).toEqual(expected);
  });

  it('onlyAlpha("Feijoada 10") should return "Feijoada "', () => {
    const actual = onlyAlpha('Feijoada 10');
    const expected = 'Feijoada ';

    expect(actual).toEqual(expected);
  });

  it('onlyAlpha("Pastel nota 1000!") should return "Pastel nota "', () => {
    const actual = onlyAlpha('Pastel nota 1000!');
    const expected = 'Pastel nota ';

    expect(actual).toEqual(expected);
  });

  it('onlyAlpha("!@#!%¨%$1123123only$#! alpha 1323123") should return "only alpha "', () => {
    const actual = onlyAlpha('!@#!%¨%$1123123only$#! alpha 1323123"');
    const expected = 'only alpha ';

    expect(actual).toEqual(expected);
  });
});
