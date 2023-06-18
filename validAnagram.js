/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  const len = s.length
  if(len !== t.length) return false
  const a = s.split('').sort()
  const b = t.split('').sort()

  for(let i = 0; i < len; i++) {
    if(a[i] !== b[i]) return false
  }

  return true
};

console.log(isAnagram('anagram', 'nagaram'))