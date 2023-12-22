const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const sorted = [];
  arr.forEach(e => {
    if (e !== -1) sorted.push(e);
  });
  sorted.sort((a, b) => a - b);

  let counter = 0;
  for (const i in arr) {
    if (arr[i] !== -1) {
      arr[i] = sorted[counter]
      counter++;
    }
  }
  return arr;
}

module.exports = {
  sortByHeight
};
