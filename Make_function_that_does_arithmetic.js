function arithmetic(a, b, operator){
    let ans=0;
     switch(operator){
       case "add":
         ans = a+b;
         break;
       case "subtract":
         ans = a-b;
         break;
       case "multiply":
         ans = a*b;
         break;
       case "divide":
         ans = a/b;
         break;
     }
    return ans;
}
console.log(arithmetic(8, 2, "divide")); 