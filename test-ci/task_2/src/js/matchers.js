export default function matchers(arr) {
  arr.sort((a, b) => (a.health > b.health ? -1 : 1));
  return arr;
}
