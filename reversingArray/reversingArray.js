function reversingArray(arr){
    for (let i = 0, j = arr.length - 1; i < arr.length / 2; i++, j--) {
        console.log("Array[i]: "+arr[i]+" Array[j]: "+arr[j])
        var temp = arr[i]
        arr[i] = arr[j];
        arr[j] = temp;     
    }
    return arr;
}

var arr=[1,2,3,4,5];
var reversArray = reversingArray(arr);
console.log(reversArray);