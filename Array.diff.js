function arrayDiff(a, b) {
  let arr = [], obj = new Map();
  b = [... new Set(b)];
  for (let i = 0; i < b.length; i++) {
    if(obj.has(b[i])){
        obj.set(b[i], obj.get(b[i])+1)
    }else{
        obj.set(b[i], 1);
    }
  }
  for (let i = 0; i < a.length; i++) {
   if(!obj.get(a[i])){
      arr.push(a[i]);
   }
  }
  return arr;
}
arrayDiff([-8,14,19,-3,20,10,-7,20,-2,-1,18],[-8,14,19,-3,20,10,-7,20,-2,-1,18]);