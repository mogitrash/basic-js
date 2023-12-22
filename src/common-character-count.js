const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const s1Chars = getChars(s1);
  const s2Chars = getChars(s2);
  let counter = 0;

  for (const char1 in s1Chars) {
    if (s2Chars[char1]) {
      counter += Math.min(s2Chars[char1], s1Chars[char1]);
    }
  }

  return counter;
  
  function getChars(string) {
    const chars = {};

    for(const char of string) {
      chars[char] = (chars[char] || 0) + 1;
    }

    return chars;
  }
}

module.exports = {
  getCommonCharacterCount
};

