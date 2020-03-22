module.exports = function createDreamTeam(members) {
  let name = [];
  if(!Array.isArray(members)) return false;
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] === 'string') {
      name.push(members[i].trim().charAt(0).toUpperCase());
    }
  }
    return name.sort().join('');
};
