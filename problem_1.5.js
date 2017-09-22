// Problem #1.5:
// There are three types of edits that can be performed on strings: insert a character, remove a character, or replace a character. 
// Given two strings, write a function to check if they are one edit (or zero edits) away.

function oneEditAway(a, b) {
  const n = a.length;
  const m = b.length;
  if (Math.abs(n - m) > 1) {
    return false;
  }
  if (n === m) {
    return numDiffs(a, b, n) < 2;
  }
  const s = `${a}${b}`;
  let hash = new Map();
  let v = 1;
  for (let i = 0; i < n + m; i++) {
    if (hash.has(s[i])) {
      v = hash.get(s[i]) + 1;
    }
    hash.set(s[i], v);
    v = 1;
  }
  let odds = 0;
  for (let [key, value] of hash) {
    if (value % 2 !== 0) {
      odds++;
    }
    if (odds > 1) {
      return false;
    }
  }
  return true;
}
// Helper function that computes the number of differences between 2 strings of same size
function numDiffs(a, b, size) {
  let diff = 0;
  for (let i = 0; i < size; i++) {
    if (a[i] !== b[i]) {
      diff++;
    }
  }
  return diff;
}
console.log(oneEditAway('pale', 'ple')); // true
console.log(oneEditAway('pales', 'pale')); // true
console.log(oneEditAway('pale', 'bale')); // true
console.log(oneEditAway('pale', 'bae')); // false
