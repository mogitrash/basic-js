const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let string = str;
  if (options.addition !== undefined) {
    const addTimes = options.additionRepeatTimes || 1;
    const add = options.addition + '';
    const addSep = options.additionSeparator || '|';
    let fullAdd = '';

    for (let i = 0; i < addTimes; i++) {
      fullAdd += add;
      if (i !== addTimes - 1)  fullAdd += addSep;
    }

    string += fullAdd;
  }
  const times = options.repeatTimes || 1;
  const separator = options.separator || '+';
  let result = '';

  for (let i = 0; i < times; i++) {
    result += string;
    if (i !== times - 1) result += separator;
  }

  return result;
}

module.exports = {
  repeater
};
