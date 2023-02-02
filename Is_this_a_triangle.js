function isTriangle(a,b,c){
    let arr =[a,b,c].sort((x,y)=>x-y);
    return (arr[0]+arr[1])>arr[2]?true:false;
}
console.log(isTriangle(2,2,4));
  
  