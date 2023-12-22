const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  const CAT = '^^';
  const ROW_AMOUNT = matrix.length;
  if (ROW_AMOUNT <= 0) return 0;
  const COL_AMOUNT = matrix[0].length;
  let catCount = 0;

  

  for (let i = 0; i < ROW_AMOUNT; i++) {
    for (let j = 0; j < COL_AMOUNT; j++) {
      if (matrix[i][j] === CAT) catCount++;
    }
  }

  return catCount;
}

module.exports = {
  countCats
};
