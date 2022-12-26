function bingo(ticket, win){
    let i,point,winn=0, obj={'A':1,'B':2,'C':3,'D':4,'E':5,'F':6,'G':7,'H':8,'I':9,'J':10,'K':11,'L':12,'M':13,'N':14,'O':15,'P':16,'Q':17,'R':18,'S':19,'T':20,'U':21,'V':22,'W':23,'X':24,'Y':25,'Z':26};
    for(i=0; i<ticket.length; i++){
      point=0;
      for(let j=0; j<ticket[i][0].split("").length; j++){
        if(ticket[i][0][j].charCodeAt(0)==ticket[i][1]){
          winn++;
          break;
        }
      }
    }
    return winn >= win?"Winner!":"Loser!";
 }
 console.log(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 1));