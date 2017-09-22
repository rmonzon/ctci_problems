// Problem #1.3:
// Write a method to replace all spaces in a string with '%20'. You may assume that the string
// has sufficient space at the end to hold the additional characters, and that you are given the "true" length of the string. 
// (Note: use a character array so that you can perform this operation in place.)

function urlify(str) {
  let url = [], c = '';
  str = str.trim();
  for (let i = 0; i < str.length; i++) {
    c = str[i];
    if (c === ' ') {
      c = '%20';
    }
    url.push(c);
  }
  return url.join('');
}
console.log(urlify('http://www.google.com/search?q=how to code'));
