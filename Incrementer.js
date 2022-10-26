function incrementer(nums) { 
  let arr = nums.map((val,index)=>{
    return val+(index+1)>9? (val+(index+1))%10: val+(index+1);
  });
  return arr;
}
incrementer([4, 6, 7, 1, 3]);