let almacen = "1 limon, 2 lechugas, y 101 huevos";
function menosUno(coincidencia, cantidad, unidad){
    console.log(coincidencia);
    cantidad = Number(cantidad) - 1;
    if(cantidad == 1){
        unidad = unidad.slice(0, unidad.length - 1);
    }else if (cantidad == 0){
        cantidad = "sin";
    }
    return cantidad + " " + unidad;
}

console.log(almacen.replace(/(\d+) (\w+)/g, menosUno));