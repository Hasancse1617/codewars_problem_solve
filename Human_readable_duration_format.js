function formatDuration (seconds) {
    if(!seconds){
        return "now";
    }
    let y=0,d, h,hh,m,s,ans="";
    if(seconds >= 365*24*60*60){
        y = parseInt(seconds / (365*24*60*60));
    }
    yy = seconds % (365*24*60*60);
    d = parseInt(yy / (24*60*60));
    dd = yy % (24*60*60);
    h = parseInt(dd / 3600);
    hh = dd % 3600;
    m = parseInt(hh / 60);
    s = hh % 60;
    // console.log(yy)
    if(y > 0){
        y==1?ans+=`${y} year`:ans+=`${y} years`;
        d>0 || h>0 || m>0? ans+=", ":"";
    }
    if(d > 0){
        d==1?ans+=`${d} day`:ans+=`${d} days`;
        h>0 || m>0? ans+=", ":"";
    }
    if(h > 0){
        h==1?ans+=`${h} hour`:ans+=`${h} hours`;
        if(s>0 && m > 0){
            ans+=", ";
        }
        if(y>0 || d>0){
            if(!s>0){
                ans += " ";
            }
        }
    }
    if(m > 0){
        if(y>0 || d>0){
            if(!s>0){
                ans += "and ";
            }
        }
        m==1?ans+=`${m} minute`:ans+=`${m} minutes`;
        s > 0? ans+=" ":"";
    }
    if(s > 0){
        if(!m>0){
            y>0 || d>0 || h>0? ans+=" and ":"";
        }if(m>0){
            ans+="and ";
        }
        
        s==1?ans+=`${s} second`:ans+=`${s} seconds`;
    }
    console.log(ans)
    return ans;
}
formatDuration();