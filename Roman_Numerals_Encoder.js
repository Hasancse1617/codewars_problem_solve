function solution(number){
    let ans="";
    let decimal=[1000,900,500,400,100,90,50,40,10,9,5,4,1];
    let roman=['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];
     
    decimal.map(function(val,index){
       while(number>=val){
          ans += roman[index];
          number -= val; 
       }        
    });
    return ans;
  }
  solution(999);