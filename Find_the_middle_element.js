function gimme (triplet) {
    let max= Math.max(...triplet),min = Math.min(...triplet),mid;
    mid = triplet.filter((val)=>val!=max&&val!=min);
    return triplet.indexOf(mid[0]);
}
console.log(gimme([-5, -10, -14])); 