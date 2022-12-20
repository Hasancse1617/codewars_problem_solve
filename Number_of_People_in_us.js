var number = function(busStops){
    return busStops.reduce((acc,val,index)=>{
      return (acc+val[0])-val[1];
    },0)
 }
 console.log(number([[10,0],[3,5],[5,8]]))