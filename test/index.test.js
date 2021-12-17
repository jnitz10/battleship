const testFuncions = require('./../src/index');

test('adds 1 + 2 to equal 3', () => {
  expect(testFuncions.sum(1, 2)).toBe(3);
});