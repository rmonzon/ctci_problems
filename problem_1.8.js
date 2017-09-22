// Problem #1.8:
// Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column are set to 0.
function zeroMatrix(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  let zeroes = [];
  for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
          if (matrix[i][j] === 0) {
              zeroes.push([i, j]);
          }
      }
  }
  for (let i = 0; i < zeroes.length; i++) {
    setRowAndColToZero(matrix, rows, cols, zeroes[i][0], zeroes[i][1]);
  }
  return matrix;
}
function setRowAndColToZero(matrix, n, m, row, col) {
  for (let i = 0; i < n; i++) {
    matrix[i][col] = 0;
  }
  for (let j = 0; j < m; j++) {
    matrix[row][j] = 0;
  }
}
let m = [
  [1, 1, 1, 1, 1],
  [1, 1, 1, 0, 1],
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1]
];
console.log(zeroMatrix(m1));
