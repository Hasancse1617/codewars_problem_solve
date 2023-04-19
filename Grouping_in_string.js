const isConsecutive = (str) => {
    let arr = str.split(""),ans=[arr[0]],t=arr[0];
    for(let i=1; i<arr.length; i++){
      if(t!=arr[i]){
        if(ans.indexOf(arr[i])!=-1){ return false;}
        ans.push(arr[i]);
        t=arr[i];
      }
    }
    return true;
 }
 console.log(isConsecutive("001234400522"))
 