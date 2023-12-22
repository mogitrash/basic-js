const { NotImplementedError } = require('../extensions/index.js');

/**
 * Thewre's a list of file, since to files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let result = [];
  const repeatTimes = {};

  names.forEach(name => {
    if (repeatTimes[name] > 0) {
      result.push(`${name}(${repeatTimes[name]})`);
      repeatTimes[`${name}(${repeatTimes[name]})`] = repeatTimes[name] || 0 + 1;
      repeatTimes[name]++;
    } else {
      result.push(name);
      repeatTimes[name] = repeatTimes[name] || 0 + 1;
    }
  })

  return result;
}

module.exports = {
  renameFiles
};

// console.log(renameFiles(["file", "file", "image", "file(1)", "file"]));
