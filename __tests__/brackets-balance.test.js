import isBalanced from '../src';

describe('Must be valid', () => {
  test('test 1', () => {
    const string = '{((a+b)*3) + a + c*[2-x]}*x';
    const result = isBalanced(string);
    expect(result).toBe(true);
  });
  test('test 2', () => {
    const string = '()[{a}+c]';
    const result = isBalanced(string);
    expect(result).toBe(true);
  });
});

describe('Must be invalid', () => {
  test('test 1', () => {
    const string = '(a+{b) *c}';
    const result = isBalanced(string);
    expect(result).toBe(false);
  });
  test('test 2', () => {
    const string = '([a+b]*c}';
    const result = isBalanced(string);
    expect(result).toBe(false);
  });
});
