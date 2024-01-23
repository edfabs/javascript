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
                //this.contenido[y * ancho + x] = y * ancho + x;

            }
        }
    }

    get obtener(x, y){
        return this.contenido[y * this.ancho + x];
    }
    set establecer(x, y, valor){
        this.contenido[y * this.ancho + x] = valor;
    }
}

class IteradorMatriz{
    constructor(matriz) {
        this.x = 0;
        this.y = 0;
        this.matriz = matriz;
    }

    next(){
        if (this.y == this.matriz.altura) return {done: true};

        let value = {
            x: this.x,
            y: this.y,
            value: this.matriz.obtener(this.x, this.y)
        };
        this.x++;
        if(this.x == this.matriz.ancho){
            this.x = 0;
            this.y++;
        }
        return {value, done: false};
    }
}

let mat = new Matriz(4, 4, elemento = (x,y) => 'teta');

console.log(mat.ancho);
console.log(mat.altura);
// console.log(mat.establecer(4,1));
// console.log(mat.obtener(0,0));
console.log(mat.contenido);

Matriz.prototype[Symbol.iterator] = function(){
    return new IteradorMatriz(this);
}

let matriz = new Matriz(2, 2, (x,y) => 'valor ${x}, ${y}');
for(let{x, y, value} of matriz){
    console.log(x, y, value);
}


class MatrizSimetrica extends Matriz {
    constructor(tamaño, elemento = (x, y) => undefined) {
      super(tamaño, tamaño, (x, y) => {
        if (x < y) return elemento(y, x);
        else return elemento(x, y);
      });
    }
  
    set(x, y, valor) {
      super.set(x, y, valor);
      if (x != y) {
        super.set(y, x, valor);
      }
    }
  }
  
  let matrizz = new MatrizSimetrica(5, (x, y) => `${x},${y}`);
  console.log(matrizz.get(2, 3));