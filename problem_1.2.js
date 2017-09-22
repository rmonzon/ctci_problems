// Problem #1.2:
// Given two strings, write a method to decide if one is a permutation of the other.

function isPermutation(a, b) {
  const n = a.length;
  const m = b.length;
  let c = 0;
  let hash = new Map();
  if (n !== m) {
    return false;
  }
  for (let i = 0; i < n; i++) {
    if (hash.has(a[i])) {
      c = hash.get(a[i]);
      hash.set(a[i], c + 1);
    }
    else {
      hash.set(a[i], 1);
    }
  }
  for (let i = 0; i < n; i++) {
    if (hash.has(b[i])) {
      c = hash.get(b[i]);
      if (c > 0) {
        hash.set(b[i], c - 1);
      }
      else {
        return false;
      }
    }
    else {
      return false;
    }
  }
  return true;
}
console.log(isPermutation('dog', 'God')); // false
console.log(isPermutation('dog', 'god')); // true
console.log(isPermutation('cute dog', 'cutedog')); // false
