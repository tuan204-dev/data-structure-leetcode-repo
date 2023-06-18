/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

var intersect = function (nums1, nums2) {
  const mark = []
  

};


const isPrime = (n) => {
  if(n < 2) return false
  for(let i = 2; i * i <= n; i++) {
    if(n % i === 0) return false
  }
  return true
}

const prime = []

for(let i = 2; i <= 1000000000; i++) {
  if(isPrime(i)) {
    prime.push(i)
  }
}

console.log(prime)