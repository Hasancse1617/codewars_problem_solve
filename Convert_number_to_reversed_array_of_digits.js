function digitize(n) {
    return n.toString().split("").reverse().map((val)=>parseInt(val));
}
console.log(digitize(35231));
  