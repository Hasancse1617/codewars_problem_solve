var Calculator = {
    add(x,y){
      return x+y;
    },
    subtract(x,y){
      return x-y;
    },
    multiply(x,y){
      return x*y;
    },
    divide(x,y){
      if(y==0){return false}
      return x/y;
    }
}