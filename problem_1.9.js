// Problem #1.9:
// Assume you have a method 'isSubString' which checks if one word is a substring of another. Given two strings, s1 and s2, 
// write code to check if s2 is a rotation of s1 using only one call to isSubstring (e.g., "waterbottle" is a rotation of"erbottlewat").

function stringRotation(s1, s2) {
  return isSubstring(s2, `${s1}${s1}`);
}
function isSubstring(a, b) {
  return b.includes(a);
}
console.log(stringRotation('waterbottle', 'erbottlewat')); // true
