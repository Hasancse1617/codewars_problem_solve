function accum(str) {
    let s = str.toLowerCase().split(""),ans="";
    for(let i=0; i<s.length; i++){
      if(i==0){
        ans+=s[i].toUpperCase();
      }else{
        ans+="-"+s[i].toUpperCase();
        ans+=s[i].repeat(i);
      }
    }
    return ans;
}
console.log(accum("RqaEzty"));

function accum(s) {
	return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}
  
  