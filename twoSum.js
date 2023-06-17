var twoSum = function(nums, target) {
  const len = nums.length

  const numsMap = new Map()

  for(let i = 0; i < len; i++) {
    
    const result = numsMap.get(target - nums[i])
    if(result >= 0) {
      return [result, i]
    }
    numsMap.set(nums[i], i)
  }

  return []
  
};


