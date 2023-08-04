const array1 = [1, 2, 3, 4];

// const initialvalue = 0;
// const sumWithInitial = array1.reduce((accumulator, currentValue) => accumulator + currentValue, initialvalue);

// console.log(sumWithInitial);

console.log(array1.reduce((a,b) => a+b, 0))
console.log("###########################################################\n");
console.log("juntar un arrary");
var integrado = [[0,1], [2,3], [4,5]].reduce((a,b) => a.concat(b));
console.log(integrado)
console.log("###########################################################\n");
console.log([0,2,4,6,8].reduce((a,b)=>a+b,100));
console.log("###########################################################\n");
console.log("Calculate average of array");
var arr=[0,2,4,6,8];
var average = arr.reduce((a,b,index,array)=>a+=b)/arr.length;
console.log(average);