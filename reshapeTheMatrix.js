/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (mat, r, c) {
  const newArr = [];
  for (const child of mat) {
    newArr.push(...child);
  }

  if (r * c !== newArr.length) return mat;

  const output = [];
  for (let i = 0; i < r; i++) {
    output.push(newArr.slice(i * c, i * c + c));
  }
  return output;
};
