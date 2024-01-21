require("./load")("script.js");

function codigoCaracter(codigo_caracter){
    for(let codigo of SCRIPTS){
        if(codigo.ranges.some(([desde, hasta]) => {
            console.log("desde:"+desde+" hasta:"+hasta);
            return codigo_caracter >= desde && codigo_caracter < hasta;
        })) {
            return codigo;
        }
    }
    return null;
}

// console.log(codigoCaracter(200));
let caballoZapato = "🐴👟";
console.log(caballoZapato.length);