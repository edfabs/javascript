let entrada = "Un string con 3 numeros en el... 42 y 88";
let numero = /\b\d+\b/g;
let coincidencia;
while(coincidencia = numero.exec(entrada)){
    console.log("Se encontro", coincidencia[0], "en", coincidencia.index);
}