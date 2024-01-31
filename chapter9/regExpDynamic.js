let nombre = "harry";
let texto = "Harry es un personaje peligroso.";
let regexp = new RegExp("\\b(" + nombre + ")\\b", "gi");
console.log(regexp)
console.log(texto.replace(regexp , "_$1_"));

let namo = "dea+h[]rd";
let text = "Este sujeto dea+h[]rd es super fastidioso";
let escapados = namo.replace(/[\\[.+*?(){|^$]/g, "\\$&");
console.log(escapados);
let regexpOne = new RegExp("\\b" + escapados + "\\b", "gi");
console.log(regexpOne)
console.log(text.replace(regexpOne, "_$&_"));