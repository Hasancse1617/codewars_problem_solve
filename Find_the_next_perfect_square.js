function findNextSquare(sq) {
    if(Number.isInteger(Math.sqrt(sq))){
      let num = Math.sqrt(sq);
      return (num+1)*(num+1);
    }
    return -1;
}