class Vector{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    mas(vectorMas){
        return new Vector(this.x + vectorMas.x, this.y + vectorMas.y);
    }

    menos(vectorMenos){
        return new Vector(this.x - vectorMenos.x, this.y - vectorMenos.y);
    }

    get longitud(){
        return Math.sqrt(Math.pow(this.x,2) + Math.pow(this.y,2));
    }
}

console.log(new Vector(2,3).mas(new Vector(3,4)));
console.log(new Vector(2,3).menos(new Vector(3,4)));
console.log(new Vector(2,3).longitud);