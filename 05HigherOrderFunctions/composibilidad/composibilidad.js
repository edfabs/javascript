require("./load")("script.js");

function promedio(array){
    return array.reduce((a,b) => a + b) / array.length;
}

console.log(Math.round(promedio(SCRIPTS.filter(codigo => codigo.living).map(codigo => codigo.year))));

console.log(Math.round(promedio(SCRIPTS.filter(codigo => !codigo.living).map(codigo => codigo.year))));