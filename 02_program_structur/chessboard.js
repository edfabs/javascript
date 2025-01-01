var BW = "";
for (var row = 0; row < 8; row++){
    //se crean las filas
    for (var col = 0; col < 8; col++) {
        // se crean las columnas
        if ((row+col) % 2 === 0 ) {
            // si la suma de la fila y la columna es par, se coloca una casilla
            BW += "#";
        }else{
            // si la suma de la fila y la columna es impar, se coloca un espacio
            BW += " ";
        }
    }
    // Se imprime el renglon una vez llenado
    console.log(BW);
    // Se limpia el renglon para que no se repitan los valores
    BW = "";
}
