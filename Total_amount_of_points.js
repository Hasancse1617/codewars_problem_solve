function points(games) {
    return games.reduce((acc,val)=>{
      let a = val.split(":");
      if(a[0]>a[1]){
        return acc+3;
      }else if(a[0]<a[1]){
        return acc+0;
      }else{
        return acc+1;
      }
      return acc;
    },0)
}
console.log(points(["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"]))