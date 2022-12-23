function moreZeros(s){  
    let arr = [...new Set(s.split(""))],ans=[];
    for(let i=0; i<arr.length; i++){
      let s1= (arr[i].charCodeAt(0).toString(2).match(/0/g,"")==null)?0:arr[i].charCodeAt(0).toString(2).match(/0/g,"").length;
      let s2= (arr[i].charCodeAt(0).toString(2).match(/0/g,"")==null)?0:arr[i].charCodeAt(0).toString(2).match(/1/g,"").length;
      (s1>s2)?ans.push(arr[i]):"";
    }
    return ans;
  }
  console.log(moreZeros("abcdeabcde"))