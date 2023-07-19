function range(init, end){
    var suma = 0;
    for(var i = init; i <= end; i++){
        suma = suma + i;
    }
    return suma
}

var sumRange = range(0, 4);
console.log(sumRange)