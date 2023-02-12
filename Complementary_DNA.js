function DNAStrand(dna){
    return dna.split("").reduce((acc,val)=>{
      if(val=="A"){
        return acc+"T";
      }else if(val=="T"){
        return acc+"A"
      }
      else if(val=="C"){
        return acc+"G";
      }else if(val=="G"){
        return acc+"C"
      }
      return ACC+val;
    },"")
 }
 console.log(DNAStrand("ATTGC")); 