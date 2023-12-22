const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (!str) return '';
  let streakChar = str[0];
  let streakCount = 0;
  let result = '';
  for (const char of str) {
    if (streakChar !== char) {
      if (streakCount > 1) result += streakCount; 
      result += streakChar;

      streakChar = char;
      streakCount = 0;
    }
    streakCount++;
  }

  if (streakCount > 1) result += streakCount; 
  result += streakChar;

  return result;
}

module.exports = {
  encodeLine
};

console.log(encodeLine(''));