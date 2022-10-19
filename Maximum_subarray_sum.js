var maxSequence = function(arr){
    let arrr = [], large=0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            arrr.push(arr.slice(i,j+1));
        }
    }
    for (let i = 0; i < arrr.length; i++) {
        var sum = arrr[i].reduce(function(a, b){
            return a + b;
        }, 0);
        if(large < sum){
            large = sum;
        }
    }
    console.log(large);
    return large;
}
maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]);