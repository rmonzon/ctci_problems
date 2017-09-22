// Problem #1.4:
// Given a string, write a function to check if it is a permutation of a palindrome. A palindrome is a word or phrase that 
// is the same forwards and backwards. A permutation is a rearrangement of letters. The palindrome does not need to be limited to just
// dictionary words.

function palindromePermutation(str) {
  str = str.toLowerCase();
  let hash = new Map();
  const n = str.length;
  let v = 1, spaces = 0;
  for (let i = 0; i < n; i++) {
    if (str.charCodeAt(i) === 32) {
      spaces++;
      continue;
    }
    if (hash.has(str[i])) {
      v = hash.get(str[i]) + 1;
    }
    hash.set(str[i], v);
    v = 1;
  }
  for (let [key, value] of hash) {
    if (value % 2 === 0) {
      hash.delete(key);
    }
  }
  const even = (n - spaces) % 2 === 0;
  if (even) {
    return hash.size === 0;
  }
  return hash.size === 1 && Array.from(hash.values())[0] === 1;
}
console.log(palindromePermutation('Tact Coa')); // true
console.log(palindromePermutation('tactcoapapa')); // true
