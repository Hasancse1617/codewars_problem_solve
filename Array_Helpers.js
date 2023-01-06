Array.prototype.square = function(){
    let arr=[];
    for(let i=0; i<this.length; i++){
      arr.push(this[i]*this[i]);
    }
    return arr;
  }
  Array.prototype.cube = function(){
    let arr=[];
    for(let i=0; i<this.length; i++){
      arr.push(this[i]*this[i]*this[i]);
    }
    return arr;
  }
  Array.prototype.average = function(){
    let sum=0;
    for(let i=0; i<this.length; i++){
      sum = sum + this[i];
    }
    return (sum/this.length);
  }
  Array.prototype.sum = function(){
    let sum=0;
    for(let i=0; i<this.length; i++){
      sum = sum + this[i];
    }
    return sum;
  }
  Array.prototype.even = function(){
    let arr=[];
    for(let i=0; i<this.length; i++){
      if(this[i]%2==0){
        arr.push(this[i]);
      }
    }
    return arr;
  }
  Array.prototype.odd = function(){
    let arr=[];
    for(let i=0; i<this.length; i++){
      if(this[i]%2==1){
        arr.push(this[i]);
      }
    }
    return arr;
  }
  var numbers = [1, 2, 3, 4, 5];
  console.log(numbers.square());
  console.log(numbers.cube());
  console.log(numbers.average());
  console.log(numbers.sum());
  console.log(numbers.even());
  console.log(numbers.odd());