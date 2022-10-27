function balance(book) {
    const replaced = book.replace(/[^a-z0-9 .\r\n|\r]/gi, '');
    const arr = replaced.split("\n");
    
    let balance = Number(arr[0]).toFixed(2);
    let total = balance;
    let ans = "",item=0;
    for(let i=0; i<arr.length; i++){
      if(i==0){
          ans += `Original Balance: ${balance}\r\n`;
          item++;
      }else if(arr[i]){
          let strArr = arr[i].split(" ");
          balance = (balance - Number(strArr[2])).toFixed(2);
          ans += `${strArr[0]} ${strArr[1]} ${Number(strArr[2]).toFixed(2)} Balance ${balance}\r\n`;
          item++;
      }
    }
    let expense = (total - balance).toFixed(2);
    ans += `Total expense  ${expense}\r\n`;  
    ans += `Average expense  ${(expense/(item-1)).toFixed(2)}`;
  
  //   console.log(ans);
    return ans;
  }
  balance(`1233.00
  125 Hardware;! 24.8?;
  123 Flowers 93.5
  127 Meat 120.90
  120 Picture 34.00
  124 Gasoline 11.00
  123 Photos;! 71.4?;
  122 Picture 93.5
  132 Tyres;! 19.00,?;
  129 Stamps 13.6
  129 Fruits{} 17.6
  129 Market;! 128.00?;
  121 Gasoline;! 13.6?;`);