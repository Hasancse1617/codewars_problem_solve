function sumOfDifferences(arr) {
    arr.sort(function(a,b){return b-a});
    return arr.map((x,y,arr)=>x-arr[y+1]).filter((item)=>typeof item == "number" && item).reduce((sum,x)=>sum+x,0);
}
sumOfDifferences([0,0,0,0,0,0,0]);