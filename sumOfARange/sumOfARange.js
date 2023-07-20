function range(init, end){
    var suma = 0;
    var arr= [];
    for(var i = init; i <= end; i++){
        arr.push(i);
        suma = suma + i;
    }
    console.log(arr)
    return suma
}

var sumRange = range(8, 9);
console.log(sumRange)