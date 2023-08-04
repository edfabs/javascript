console.log("return the array that complies with the condition")
var words = ["calma", "orale", "estacionamiento", "bebe"];
var result = words.filter(word => word.length > 4);
console.log(result);

console.log("***********************************************************");
console.log("Return the elements of arra that complies with the condition");
var filtered = [11,2,5,6,7,12,23,54].filter(element => element > 10);
console.log(filtered);

console.log("***********************************************************");
console.log("Return the elements of arra that complies with the condition");
var arr = [{id:15},{id:-1},{id:0},{id:3},{id:12.2},{},{id:null},{id:NaN},{id:'undefined'}];
var entradasInvalidas = 0;
var arrPorID = arr.filter(obj => 'id' in obj && typeof(obj.id) === 'number' && !isNaN(obj.id));
console.log(arrPorID);
console.log("Entradas invalidas:",entradasInvalidas = arr.length - arrPorID.length);