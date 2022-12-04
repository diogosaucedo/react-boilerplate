import isEmail from './isEmail';

// Inspiration: https://github.com/validatorjs/validator.js/blob/master/test/validators.js

describe('Method: isEmail(email)', () => {
  it('isEmail() should be a function', () => {
    expect(isEmail).toBeInstanceOf(Function);
  });

  it('isEmail("") should return false', () => {
    const actual = isEmail('');
    const expected = false;

    expect(actual).toBe(expected);
  });

  // Valid

  it('isEmail("foo@bar.com") should return true', () => {
    const actual = isEmail('foo@bar.com');
    const expected = true;

    expect(actual).toBe(expected);
  });

  it('isEmail("x@x.au") should return true', () => {
    const actual = isEmail('x@x.au');
    const expected = true;

    expect(actual).toBe(expected);
  });

  it('isEmail("foo@bar.com.au") should return true', () => {
    const actual = isEmail('foo@bar.com.au');
    const expected = true;

    expect(actual).toBe(expected);
  });

  it('isEmail("foo+bar@bar.co") should return true', () => {
    const actual = isEmail('foo+bar@bar.co');
    const expected = true;

    expect(actual).toBe(expected);
  });

  it('isEmail("hans.m端ller@test.com") should return true', () => {
    const actual = isEmail('hans.m端ller@test.com');
    const expected = true;

    expect(actual).toBe(expected);
  });

  it('isEmail("test123+ext@gmail.com") should return true', () => {
    const actual = isEmail('test123+ext@gmail.com');
    const expected = true;

    expect(actual).toBe(expected);
  });

  it('isEmail("some.name.midd.leNa.me.and.locality+extension@GoogleMail.com") should return true', () => {
    const actual = isEmail(
      'some.name.midd.leNa.me.and.locality+extension@GoogleMail.com',
    );
    const expected = true;

    expect(actual).toBe(expected);
  });

  it('isEmail("test@gmail.com") should return true', () => {
    const actual = isEmail('test@gmail.com');
    const expected = true;

    expect(actual).toBe(expected);
  });

  it('isEmail("test.1@gmail.com") should return true', () => {
    const actual = isEmail('test.1@gmail.com');
    const expected = true;

    expect(actual).toBe(expected);
  });

  it('isEmail("test@1337.com") should return true', () => {
    const actual = isEmail('test@1337.com');
    const expected = true;

    expect(actual).toBe(expected);
  });

  // Invalid

  it('isEmail("invalidemail@") should return false', () => {
    const actual = isEmail('invalidemail@');
    const expected = false;

    expect(actual).toBe(expected);
  });

  it('isEmail("invalid.com") should return false', () => {
    const actual = isEmail('invalid.com');
    const expected = false;

    expect(actual).toBe(expected);
  });

  it('isEmail("@invalid.com") should return false', () => {
    const actual = isEmail('@invalid.com');
    const expected = false;

    expect(actual).toBe(expected);
  });

  it('isEmail("foo@bar.com.") should return false', () => {
    const actual = isEmail('foo@bar.com.');
    const expected = false;

    expect(actual).toBe(expected);
  });

  it('isEmail("somename@ｇｍａｉｌ.com") should return false', () => {
    const actual = isEmail('somename@ｇｍａｉｌ.com');
    const expected = false;

    expect(actual).toBe(expected);
  });

  it('isEmail("foo@bar.co.uk.") should return false', () => {
    const actual = isEmail('foo@bar.co.uk.');
    const expected = false;

    expect(actual).toBe(expected);
  });

  it('isEmail("z@co.c") should return false', () => {
    const actual = isEmail('z@co.c');
    const expected = false;

    expect(actual).toBe(expected);
  });

  it('isEmail("multiple..dots@stillinvalid.com") should return false', () => {
    const actual = isEmail('multiple..dots@stillinvalid.com');
    const expected = false;

    expect(actual).toBe(expected);
  });

  it('isEmail("test123+invalid! sub_address@gmail.com") should return false', () => {
    const actual = isEmail('test123+invalid! sub_address@gmail.com');
    const expected = false;

    expect(actual).toBe(expected);
  });

  it('isEmail("gmail...ignores...dots...@gmail.com") should return false', () => {
    const actual = isEmail('gmail...ignores...dots...@gmail.com');
    const expected = false;

    expect(actual).toBe(expected);
  });

  it('isEmail("wrong()[]",:;<>@@gmail.com") should return false', () => {
    const actual = isEmail('wrong()[]",:;<>@@gmail.com');
    const expected = false;

    expect(actual).toBe(expected);
  });
});
