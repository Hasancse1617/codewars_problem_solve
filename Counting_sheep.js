function countSheeps(arrayOfSheep) {
    return arrayOfSheep.reduce((acc,val)=>{
      if(val){
        return acc+1;
      }
      return acc;
    },0)
}