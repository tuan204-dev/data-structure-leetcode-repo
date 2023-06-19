  /**
   * @param {number[]} prices
   * @return {number}
   */
  var maxProfit = function(prices) {
    const len = prices.length
    let max = 0;
    let ptr1 = 0;
    let ptr2 = 1;
    while(ptr2 < len) {
      if(prices[ptr1] >= prices[ptr2]) {
        ptr1 = ptr2
      } else {
        if(prices[ptr2] - prices[ptr1] > max) {
          max = prices[ptr2] - prices[ptr1]
        }
      }

      ptr2++
    }
    
    return max
  };

console.log(maxProfit([1,2,4,2,5,7,2,4,9,0,9]))