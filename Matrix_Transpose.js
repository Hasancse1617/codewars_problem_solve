function transpose(matrix) {
    if(matrix.length==0){return [];}
    let ans = [],i,j,a=[];
    for(i=0; i<matrix[0].length; i++){
      a=[]
      for(j=0; j<matrix.length; j++){
        a.push(matrix[j][i]);
      }
      ans.push(a);
    }
    return ans;
  }
  console.log(transpose([]))