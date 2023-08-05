function every (arr, func){
    for ( element of arr){
        var newElem = func(element)
        if( !newElem ){
            return false;
        }
    }
    return true;
}

function wsome(arr){
    return arr.some(a =>  a == 0 ?  true: false );
}

console.log(every([1,2,3,4,5], value => value > 0))
console.log(wsome([1,2,3,4,5]));
