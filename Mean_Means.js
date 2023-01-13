function geo_mean(nums, arith_mean) {
    let sum = nums.reduce((acc,val)=>acc+val,0);
    let mul = nums.reduce((acc,val)=>acc*val,1);
    let a = (arith_mean*(nums.length+1))-sum;
    return Math.pow((mul*a),(1/(nums.length+1)));
  }
  console.log(geo_mean([1, 2], 3));