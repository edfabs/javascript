// console.log("multiply array by 2")
// var numbers = [1, 5, 10, 15];
// console.log(numbers);
// // var doubles = numbers.map(function(x){
// //     return x * 2;
// // });
// var doubles = numbers.map( number => number*2);
// console.log(doubles);

// console.log("##################################")
// console.log("Root of array");
// var numbers = [1, 4, 9];
// var roots = numbers.map(Math.sqrt);
// console.log(numbers);
// console.log(roots);

console.log("##################################")
console.log("Reformatted array");
var kvArray=[{clave:1, valor:10},{clave:2, valor:20}, {clave:3, valor:30}];
console.log(kvArray);
var reformattedArray = kvArray.map(function(obj){
    var robj={};
    robj[obj.clave] = obj.valor;
    return robj;
});
console.log(kvArray);
console.log(reformattedArray);

console.log("##################################")
console.log("return char of an array");
var map = Array.prototype.map;
var valores = map.call('Hello world', char => char.charCodeAt(0));
console.log(valores);

console.log("##################################")
console.log("Invertir una cadena");
var cadena = '12345';
var valores = map.call(cadena, x => x).reverse().join('');
console.log(cadena);
console.log(valores);