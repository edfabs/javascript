var arr1 = [1,2,3,4,5,6,7];
var arr2 = ['a','d','v','f','c','s','c'];
var arr3 = ['q',2,3,4,'d','f'];
var nombres = ['jorge', 'fabian', 'Diego', 'carlos', 'karla'];
var arr4 = [[2,3,4], [4,5,6], [9,8,7]]

function flatten(...args){
    newArray = args.reduce((a,b)=>a.concat(b));
    return newArray;
}

console.log(flatten(arr1, arr2, arr3, nombres, arr4));
