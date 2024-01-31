class ErrorDeEntrada extends Error{}

function pedirDireccion(pregunta){
    let resultado = prompt(pregunta);
    if(resultado.toLowerCase() == "izquierda") return "I";
    if(resultado.toLowerCase() == "derecha") return "D";
    throw new ErrorDeEntrada("Dirección invalida:" + resultado);
}

for(;;){
    try{
        let direccion = pedirDireccion("Donde?");
        console.log("Tu eliges", direccion);
        break;
    }catch(e){
        if(e instanceof ErrorDeEntrada){
            console.log("no es una dirección valida. Innta de nuevo")
        }else{
            throw(e);
        }
    }
}