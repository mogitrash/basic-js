const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    if(!Array.isArray(arr)) return 0;

    let max = 1;

    for (let e of arr) {
      let depth = 1;
      depth = this.calculateDepth(e) + 1;
      max = Math.max(depth, max);
    }

    return max;
  }
}

module.exports = {
  DepthCalculator
};
const c = new DepthCalculator();
