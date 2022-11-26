function alphanumeric(string){
    return (string=="")? false: /^[a-zA-Z0-9]*$/.test(string);
}