class Matriz{
    constructor(ancho, altura, elemento = (x,y) => undefined)
    {
        this.ancho = ancho;
        this.altura = altura;
        this.contenido = [];

        for(let y = 0; y < altura; y++){
            for(let x = 0; x < ancho; x++){
                console.log(`y: ${y}, x: ${x}, ancho: ${ancho}, operacion: ${y*ancho+x}`);
                this.contenido[y * ancho + x] = elemento(x, y);
            }
        }
    }

    obtener(x, y){
        return this.contenido[y * this.ancho + x];
    }
    establecer(x, y, valor){
        this.contenido[y * this.ancho + x] = valor;
    }
}

let mat = new Matriz(4, 4, elemento = (x,y) => 'teta');

console.log(mat.ancho);
console.log(mat.altura);
// console.log(mat.establecer(4,1));
// console.log(mat.obtener(0,0));
console.log(mat.contenido);