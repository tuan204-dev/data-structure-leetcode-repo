/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  const char = new Map()


  const len = s.length

  for(let i = 0; i < len; i++) {
    if(char.get(s[i]) !== undefined) {
      char.set(s[i], [char.get(s[i])[0] + 1, i])
    } else {
      char.set(s[i], [1, i]);
    }
  }


  for(const x of char.values()) {
    if(x[0] === 1) {
      return x[1]
    }
  }

  return -1
};

