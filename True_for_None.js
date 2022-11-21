function none(arr, fun){
    if(arr.length == 0){return true;}
    for(let i=0; i<arr.length; i++){
      j=fun(arr[i]);
    }
    return j==true? false : true;
}
none([1,2,3,4,5],function(item){ return item > 4; })