const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  const teamName = members.filter(e => {
    if(typeof e === 'string') return true;
  })
  .map(e => e.trim().slice(0,1).toUpperCase())
  .sort()
  .join('');
  if (teamName) return teamName
  else return false;
}

module.exports = {
  createDreamTeam
};
