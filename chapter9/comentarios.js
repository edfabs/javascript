function removeComentarios(codigo){
    return codigo.replace(/\/\/.*|\/\*[^]*?\*\//g,"");
}

console.log(removeComentarios("1 + /*2*/3"));
console.log(removeComentarios("x = 10; //ten!"));
console.log(removeComentarios("1 /*a*/ + /*b*/ 1"))