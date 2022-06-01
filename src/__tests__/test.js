import funcFilt from '../filterHealth';

test('filter health', () => {
  const pers = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];
  const result = funcFilt(pers);
  expect(result).toEqual(pers);
});
