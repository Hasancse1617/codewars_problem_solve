function findNeedle(haystack) {
    let pos=0;
    for(let i=0; i<haystack.length; i++){
      if(haystack[i]==='needle'){
        pos=i;
      }
    }
    return `found the needle at position ${pos}`;
  }
  console.log(findNeedle(['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false]));