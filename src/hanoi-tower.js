const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  const turns = calcTurns(disksNumber);
  const freq = 1 / (turnsSpeed / 3600);

  function calcTurns(disksNum) {
    if (disksNum === 1) return 1;

    return calcTurns(disksNum - 1) * 2 + 1;
  }

  return { 'turns': turns, 'seconds': Math.floor(turns * freq)};
}

module.exports = {
  calculateHanoi
};