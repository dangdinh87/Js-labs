import { sum } from './main';

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds 0 + 1 to equal 1', () => {
  expect(sum(0, 0)).toBe(0);
});
