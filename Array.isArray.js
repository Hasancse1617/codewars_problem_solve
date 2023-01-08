function isArray(arr) {
    if(typeof arr !="object" || arr == null){
      return false;
    }else{
      return Object.prototype.toString.call(arr) === '[object Array]';
    }
  }
console.log(isArray({__proto__:Array.prototype}));