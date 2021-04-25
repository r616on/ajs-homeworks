import  healthStatus  from '../healthStatus.js';

test.each([
  ['healthy', { name: 'Маг', health: 99 }, 'healthy'],
  ['healthy', { name: 'Маг', health: 51 }, 'healthy'],
  ['wounded', { name: 'Маг', health: 50 }, 'wounded'],
  ['wounded', { name: 'Маг', health: 15 }, 'wounded'],
  ['critical', { name: 'Маг', health: 14 }, 'critical'],
  ['critical', { name: 'Маг', health: 1 }, 'critical'],
])(('must calculate health from %s '),
  (level, amount, expected) => {
    const result = healthStatus(amount);
    expect(result).toBe(expected);
  });
