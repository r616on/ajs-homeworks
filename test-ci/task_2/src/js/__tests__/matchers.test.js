import matchers from '../matchers.js';

test('order of elements >', () => {
  const newArr = [
    { name: 'мечник', health: 60 },
    { name: 'маг', health: 20 },
    { name: 'лучник', health: 45 },
  ];

  expect(matchers(newArr)).toEqual([
    { name: 'мечник', health: 60 },
    { name: 'лучник', health: 45 },
    { name: 'маг', health: 20 },
  ]);
});
