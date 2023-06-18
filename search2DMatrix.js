/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

var searchMatrix = function (matrix, target) {
  let mark = -1;
  const len = matrix.length;
  for (let i = 0; i < len; i++) {
    if (target < matrix[i][0]) {
      break;
    }
    mark++;
  }

  if (mark === -1) mark++;

  for (let i = 0; i < matrix[mark].length; i++) {
    if (target === matrix[mark][i]) return true;
  }

  return false;
};

console.log(searchMatrix([[1]], 0));
