// Problem #1.1:
// Implement an algorithm to determine if a string has all unique characters. 
// - What if you cannot use additional data structures?

function isUnique(str) {
  let uniq = new Set();
  for (let i = 0; i < str.length; i++) {
    if (uniq.has(str[i])) {
      return false;
    }
    uniq.add(str[i]);
  }
  return true;
}
console.log(isUnique('abc')); // true
console.log(isUnique('abcdfc')); // false
