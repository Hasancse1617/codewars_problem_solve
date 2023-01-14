const arrCheck = value =>value.every((x)=>Object.prototype.toString.call(x) === '[object Array]');
console.log(arrCheck([[],{}]));