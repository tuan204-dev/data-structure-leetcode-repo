/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

var intersect = function (nums1, nums2) {
  const len1 = nums1.length;
  const len2 = nums2.length;

  const mapNums1 = new Map();

  for (let i = 0; i < len1; i++) {
    if (mapNums1.get(nums1[i]) !== undefined) {
      mapNums1.set(nums1[i], mapNums1.get(nums1[i]) + 1);
    } else {
      mapNums1.set(nums1[i], 1);
    }
  }

  // const mapNums2 = new Map()

  // for(let i = 0; i < len2; i++) {
  //   if(mapNums2.get(nums2[i]) !== undefined) {
  //     mapNums2.set(nums2[i], mapNums2.get(nums2[i]) + 1)
  //   } else {
  //     mapNums2.set(nums2[i], 1)
  //   }
  // }

  const output = [];

  for (let i = 0; i < len2; i++) {
    if (mapNums1.get(nums2[i]) !== undefined && mapNums1.get(nums2[i]) > 0) {
      output.push(nums2[i]);
      mapNums1.set(nums2[i], mapNums1.get(nums2[i]) - 1);
    }
  }

  return output;
};

intersect([1, 2, 2, 1], [2, 2]);
