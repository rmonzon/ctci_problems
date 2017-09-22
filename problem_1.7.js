// Problem #1.7:
// Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes, write a method to rotate the 
// image by 90 degrees. Can you do this in place?

function rotateMatrix(matrix) {
  const n = matrix.length;
  let k = 0, offset = 0;
  for (let i = 0; i < Math.floor(n / 2); i++) {
    k = n - i - 1;
    offset = n - i - 1;
    for (let j = i; j < offset; j++) {
      let aux = matrix[i][j];
      matrix[i][j] = matrix[k][i];
      matrix[k][i] = matrix[offset][k];
      matrix[offset][k] = matrix[j][offset];
      matrix[j][offset] = aux;
      k--;
    }
  }
  return matrix;
}
let m = [
  [5,  1,  9,  11],          // [15, 13, 2,  5],
  [2,  4,  8,  10],  // ==>  // [14, 3,  4,  1],
  [13, 3,  6,   7],  // ==>  // [12, 6,  8,  9],
  [15, 14, 12, 16]           // [16, 7, 10, 11]
];
console.log(rotateMatrix(m));
