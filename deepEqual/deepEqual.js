function deepEquial( value1, value2){
    if( value1 === value2){
        return true;
    }

    if( typeof value1 === "object" && value1 !== null && typeof value2 === "object" && value2 !== null){
        const keys1 = Object.keys(value1);
        const keys2 = Object.keys(value2);

        if(keys1.length !== keys2.length){
            return false;
        }

        for (let key of keys1){
            if (!keys2.includes(key) || !deepEquial(value1[key], value2[key])){
                return false;
            }
        }
        return true;
    }
    return false;
}

const obj1 = { a : 1, b : 2, c : { x : 10, y : 20} };
const obj2 = { a : 1, b : 2, c : { x : 10, y : 20} };
const obj3 = { a : 1, b : 2, c : { x : 10, y : 30} };

console.log(deepEquial(obj1, obj2));
console.log(deepEquial(obj1, obj3));
console.log(deepEquial(5,5));
console.log(deepEquial(5,"5"));
console.log(deepEquial(null, null));
console.log(deepEquial(null,undefined));