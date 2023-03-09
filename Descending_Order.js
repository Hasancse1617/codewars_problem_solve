function descendingOrder(n){
    return Number(n.toString().split("").sort((x,y)=>y-x).join(""));    
}
console.log(descendingOrder(123456789));