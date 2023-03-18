function smaller(nums) {
    let i,j,count,ans=[];
     for(i=0;i<nums.length; i++){
       count=0;
       for(j=i+1;j<nums.length; j++){
         if(nums[i]>nums[j]){
           count++;
         }
       }
       ans.push(count);
     }
    return ans;
  }
  console.log(smaller([1, 2, 3]));