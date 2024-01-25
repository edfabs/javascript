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
console.log(caballoZapato[0]);
console.log(caballoZapato.charCodeAt(0));
console.log(caballoZapato.codePointAt(0));

let dragonRosa = "🐉🌹";
for (let caracter of dragonRosa) {
  console.log(caracter);
}