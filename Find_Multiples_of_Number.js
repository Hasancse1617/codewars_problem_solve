function findMultiples(integer, limit) {
    const arr = [];
    let j = 0;
    for (let i = 1; j < limit; i++) {
        j = integer*i;
        if(j <= limit){
            arr.push(integer*i);
        }
    }
    return arr;
}
findMultiples(5,25);