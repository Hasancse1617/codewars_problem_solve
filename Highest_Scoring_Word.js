function high(x){
    let obj= {"a":1,"b":2,"c":3,"d":4,"e":5,"f":6,"g":7,"h":8,"i":9,"j":10,"k":11,"l":12,"m":13,"n":14,"o":15,"p":16,"q":17,"r":18,"s":19,"t":20,"u":21,"v":22,"w":23,"x":24,"y":25,"z":26};
    let arr = x.split(" "),num=0,ans="";
    for(let i=0; i<arr.length; i++){
      let arr1 = arr[i].split(""),sum=0;
      for(let j=0; j<arr1.length; j++){
         sum = sum + obj[arr1[j]];
      }
      if(num < sum){
         ans = arr[i];
         num = sum;
      }
    }
    return ans;
}
high('aaa b');