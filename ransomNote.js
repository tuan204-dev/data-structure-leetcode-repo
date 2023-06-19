/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  if (ransomNote.length > magazine.length) return false;

  const len1 = magazine.length;

  const char = new Map();

  for (let i = 0; i < len1; i++) {
    if (char.get(magazine[i]) !== undefined) {
      char.set(magazine[i], char.get(magazine[i]) + 1);
    } else {
      char.set(magazine[i], 1);
    }
  }


  const len2 = ransomNote.length;

  for (let i = 0; i < len2; i++) {
    if (char.get(ransomNote[i]) === 0 || char.get(ransomNote[i]) === undefined) {
      return false;
    } else {
      char.set(ransomNote[i], char.get(ransomNote[i]) - 1);
    }
  }

  return true;
};

console.log(canConstruct("a", "b"));
