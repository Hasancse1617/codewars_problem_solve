var extend = function(...arr) {
    let obj = {};
    for(let i=0; i<arr.length; i++){
      if(typeof(arr[i])=="object"){
        for(let x in arr[i]){
          if(obj.hasOwnProperty(x)){
            
          }else{
            obj[x] = arr[i][x];
          }
        }
      }
    }
    return obj;
  }
  extend({a: false, b: null}, {a: true, b: 2, c: 3});