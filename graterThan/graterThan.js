function graterThan(n){
    console.log(n)
    return m => m > n;
}

let graterThan10 = graterThan(12);
console.log(graterThan10(51));