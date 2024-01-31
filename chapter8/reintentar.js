class falloUnidadMultiplicadora extends Error{}

function multiplicacionPrimitiva(a, b){
    if(Math.random() < 0.2){
        return a * b;
    }else{
        throw new falloUnidadMultiplicadora("Klunk")
    }
}

function multiplicacionConfiable(a, b){
    for(;;){
        try{
            console.log("la multiplicación es: " + multiplicacionPrimitiva(a, b));
            break;            
        }catch(e){
            if(e instanceof falloUnidadMultiplicadora){
                console.log("no es una multiplicación válida");
            }
            else{
                throw(e);
            }
        }
    }
}

console.log(multiplicacionConfiable(8,8));