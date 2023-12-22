const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const ARRAY = n.toString().split('');
  let maxInt = 0;

  ARRAY.forEach((e,i) => {
    let newArr = [];
    ARRAY.forEach((elem, index) => {
      if(index !== i)
        newArr.push(elem);
    })

    let integer = +newArr.join('');
    if (integer > maxInt)
      maxInt = integer;
  })

  return maxInt;
}

module.exports = {
  deleteDigit
};

