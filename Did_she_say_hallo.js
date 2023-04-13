function validateHello(greetings) {
    let res =  /hello|ciao|salut|hallo|hola|ahoj|czesc/.test(greetings.toLowerCase()); 
    return res
}
console.log(validateHello('hallo'))
  