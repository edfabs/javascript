class Vec{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    get long(){
        var hip = Math.sqrt(Math.pow(this.x,2) + Math.pow(this.y,2));
        return `La longitud del vector es: ${hip}`
    }
    Longitud(x,y){
        let long = Math.sqrt(Math.pow(x,2) + Math.pow(y,2))
        return long
    }
    plus(a,b){
        let resx = a + this.x;
        let resy = b + this.y;
        const long = this.Longitud(resx,resy);
        return `El vector sumado es: (${resx}, ${resy} y la longitud es: ${long}`;
    }
    minus(a,b){
        let resx = a - this.x;
        let resy = b - this.y;
        const long = this.Longitud(resx,resy);
        return `El vector restado es: (${resx}, ${resy} y la longitud es: ${long}`;
    }
    
}

const vec = new Vec(3,2);
console.log(vec.long);
console.log(vec.plus(4,3));
console.log(vec.minus(5,6));

