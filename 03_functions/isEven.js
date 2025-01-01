function isEven(num){
    if(typeof num !== 'number'){
        return 'Error: solo se pueden comparar números';
    }
    if (num == 0) {
        return true;
    }else if (num ==1){
        return false;
    }
    else {
        return isEven(Math.abs(num) - 2);}
}
console.log(isEven(4)); // false

