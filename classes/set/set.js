const elementos = new Set();
let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };
let fabian = {name: "Fabian"};
let vector1 = {x: 3, y: 2};
// elementos.add([3,2]);
elementos.add(fabian);
elementos.add(fabian);
// elementos.add([3,2]);
elementos.add(john);
elementos.add(pete);
elementos.add(mary);
elementos.add(john);
elementos.add(mary);
elementos.add(vector1);
elementos.add(vector1);
elementos.delete(vector1);
console.log(elementos.has("Mary"));
console.log(elementos);