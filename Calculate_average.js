function findAverage(array) {
    return array.length>0? array.reduce((sum,x)=>sum+x,0)/array.length:0;
}
findAverage([1,2,3,4]);