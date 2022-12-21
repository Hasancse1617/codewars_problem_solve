function newYearCelebrations(takeOffTime, minutes) {
    let y = 1440, count=0,c,m;
    let t = takeOffTime.split(":");
    if(Number(t[0])==0 && Number(t[1])==0){
       m = 1440;
    }else{
       m = (Number(t[0])*60) + Number(t[1]);
    }
    
    if(minutes.length == 0){
      return 1;
    }else{
      for(let i=0; i<minutes.length; i++){
        if(i==0){
          m = m + minutes[i];
          if(m>=y){
            count++;
          }
          m = m - 60;
        }else if(i>=1){
          c = m;
          m = m + (minutes[i]-minutes[i-1]);
          if(m>=y && c <= y){
            count++;
          }
          m = m - 60;
        }
      }
      if(m<=y){ count++; }
    }
    return count;
  }
  newYearCelebrations("00:00",[60, 120, 180, 250]);