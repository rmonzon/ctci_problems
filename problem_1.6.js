// Problem #1.6:
// Implement a method to perform basic string compression using the counts of repeated characters. For example, 
// the string aabcccccaaa would become a2blc5a3. If the "compressed" string would not become smaller than the original string, 
// your method should return the original string. You can assume the string has only uppercase and lowercase letters (a - z).

function stringCompression(s) {
  let ans = '';
  let p = s[0];
  let c = 0;
  const n = s.length;
  for (let i = 0; i < n; i++) {
    if (p === s[i]) {
      c++;
    }
    else {
      ans += `${p}${c}`;
      p = s[i];
      c = 1;
    }
  }
  ans += `${p}${c}`;
  return ans.length < n ? ans : s;
}
console.log(stringCompression('aabcccccaaa')); // a2b1c5a3
console.log(stringCompression('aabcde')); // a2b1c1d1e1
