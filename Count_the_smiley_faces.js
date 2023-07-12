function countSmileys(arr) {
    let count=0;
    for(let i=0; i<arr.length; i++){
      if(arr[i]==':D'||arr[i]==';-)'||arr[i]==';~)'||arr[i]==':-D'||arr[i]==':~)'||arr[i]==';~)'||arr[i]==';~D'||arr[i]==':)'||arr[i]==';)'||arr[i]==':-)'||arr[i]==':D'||arr[i]==';D'||arr[i]==';-D'||arr[i]==':~D') {
        count++;
      }
    }
    return count;
}