function towerBuilder(nFloors) {
    let i,j,ans=[],str;
    for(i=0; i<nFloors; i++){
      str="";
      for(j=0;j<(nFloors-i-1); j++){
        str+=" ";
      }
      for(j=0;j<(i*2)+1; j++){
        str+="*";
      }
      for(j=0;j<(nFloors-i-1); j++){
        str+=" ";
      }
      ans.push(str);
    }
    return ans;
}
console.log(towerBuilder(6));