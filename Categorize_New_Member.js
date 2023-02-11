function openOrSenior(data){
    return data.map((val)=>{
       if(val[0]>=55 && val[1]>7){
         return 'Senior';
       }else{
         return 'Open';
       }
    })
 }
 console.log(openOrSenior([[3, 12],[55,1],[91, -2],[53, 23]]));
 
 