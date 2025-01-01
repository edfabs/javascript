const minimo = (a,b) => {
    if(typeof a !== 'number' || typeof b !== 'number'){
        return 'Error: Solo se pueden comparar números';
    }
    return a <= b ? a : b;
}

console.log(minimo(0,1));