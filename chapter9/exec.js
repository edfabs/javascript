let patron =/y/g;
patron.lastIndex = 3;
let coincidencia = patron.exec("xyzzy");
console.log(coincidencia.index);
console.log(patron.lastIndex);

let global = /abc/g;
console.log(global.exec("xyz abc"));

let adhesivo = /abc/y;
console.log(adhesivo.exec("xyz abc"));

let digito = /\d/g;
console.log(digito.exec("aqui esta: 1"));
digito.lastIndex = 0;
console.log(digito.exec("y ahora: 1"));

console.log("Banana".match(/an/g));