function Calculator(vatRate){ 
    this.vatRate = vatRate;
    this.getNet = function(grossPrice){
      return Number((grossPrice/(1+(this.vatRate/100))).toFixed(2));
    }
    
    this.getVat = function(grossPrice){
      return Number((grossPrice - (grossPrice/(1+(this.vatRate/100)))).toFixed(2));
    }
  
  }
  
var calc = new Calculator(20)
console.log(calc.getVat(100));