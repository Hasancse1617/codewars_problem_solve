function searchNames( logins ){
    return logins.filter((x,index)=>(x[0].slice(-1))=="_");
}
console.log(searchNames([ [ "foo", "foo@foo.com" ], [ "bar_", "bar@bar.com" ] ]))