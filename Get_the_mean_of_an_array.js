function getAverage(marks){
    return parseInt(marks.reduce((acc,val)=>acc+val,0)/marks.length)
}