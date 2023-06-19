/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let ptr = m + n - 1
  let ptr1 = m - 1
  let ptr2 = n - 1

  while(ptr1 >= 0 && ptr2 >= 0) {
    if(nums1[ptr1] >= nums2[ptr2]) {
      nums1[ptr--] = nums1[ptr1--]
    } else {
      nums1[ptr--] = nums2[ptr2--]
    }
  }


  if(ptr1 < 0) {
    for(let i = 0; i <= ptr2; i++) {
      nums1[i] = nums2[i]
    }
  }

};

console.log(merge([4, 6, 9, 0, 0, 0, 0], 3, [1, 1, 2, 5], 4))
