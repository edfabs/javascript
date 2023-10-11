require("./load")("script.js");

function cuentaDeCaracteres(codigo){
    return codigo.ranges.reduce((cuenta, [desde, hasta]) => {
        return cuenta + (hasta - desde);
    }, 0);
}

console.log(SCRIPTS.reduce((a,b) => {
    console.log(`a: ${a.ranges}, b: ${b.ranges}`);
    return cuentaDeCaracteres(a) < cuentaDeCaracteres(b) ? b : a;
}));