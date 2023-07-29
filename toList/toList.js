function arrayToList(arr){
    //arr = [1,2,3]
    let list = null;
    for (let i = arr.length - 1; i >= 0 ; i --) {
        const element = arr[i];
        list = { value :  arr[i], rest : list}        
    }
    return list
}

function listToArray(list){
    let arr = [];
    for(let node = list; node; node = node.rest){
        arr.push(node.value);
    }
    return arr
}

function prepend (element, list){
    return list ={ value : element, rest: list};
}

function nth(list, value){
    if (!list) {
        return undefined;        
    }else if (value === 0){
        return list.value;
    }else{
        return nth(list.rest, value-1);
    }
}

const arr = [1, 2, 3];
const list = arrayToList(arr);
console.log(list);

const newarr = listToArray(list);
console.log(newarr);

const newList = prepend(0, list);
console.log(newList)

console.log(nth(list, 0));
console.log(nth(list, 1));
console.log(nth(list, 2));
console.log(nth(list, 3));