function validatePIN (pin) {
    if(/^[0-9]+$/g.test(pin)){
      if(pin.length==4 || pin.length==6){
        return true;
      }
    }
    return false;
}
console.log(validatePIN("12.0"));
  
  