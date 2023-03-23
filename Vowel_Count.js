function getCount(str) {
    let vowelCount=0;
    const vowels = ['a','e','i','o','u'];
    for(let i of str){
      if(vowels.includes(i)){
        vowelCount++;
      }
    }
    return vowelCount;
}
console.log(getCount("abracadabra"));