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

    obtener(){
        return `valor ${this.x},${this.y}`;
    }
}

class iteradorVector{
    constructor(vector){
        this.x = 0;
        this.vector = vector;
    }
    next(){
        if( this.x == 2)return {done: true};

        let value = {   x: this.x,
                        value: `valor ${vector.x}, ${vector.y}`
                    };
        this.x++;
        return {value, done:false};
    }
}

Vector.prototype[Symbol.iterator] = function(){
    return new iteradorVector;
};

console.log(new Vector(2,3).mas(new Vector(3,4)));
console.log(new Vector(2,3).menos(new Vector(3,4)));
console.log(new Vector(2,3).longitud);
let vector = new Vector(2,3);
for(let {x, value} of vector){
    console.log(x, value);
}
