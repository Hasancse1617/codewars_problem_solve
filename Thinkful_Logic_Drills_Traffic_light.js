function updateLight(current) {
   let obj = {
    green:"yellow",
    yellow:"red",
    red:"green"
   }
   return obj[current];
} 
updateLight("green");