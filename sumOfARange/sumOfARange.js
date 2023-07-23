function range(init, end, step){
    var suma = 0;
    var arr= [];
    if( init < end){
        for(var i = init; i <= end; i = i + step){
        arr.push(i);
        suma = suma + i;
        }
        console.log(arr)
        return suma
    }else{
        for(var i =init; i >= end; i = i + step){
        arr.push(i);
        suma = suma + i;
        }
        console.log(arr)
        return suma
    }    
}

var sumRange = range(5, 2, -1);
console.log(sumRange)