function numbertoString(n, base = 10){
    let result = "", sign = "";
    if(n < 0){
        sign = "-";
        n = -n;
    }
    // debugger
    do {
        result = String(n % base) + result;
        n = Math.floor(n / base);
        console.log(n);
    } while (n > 0);
    return sign + result;
}
console.log(numbertoString(13, 10));