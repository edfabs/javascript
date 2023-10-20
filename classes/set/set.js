class Conjunto{
    constructor (){
        this.elementos = [];
    }
    add(elemento){
        if(this.elementos.indexOf(elemento) == -1){
            this.elementos.push(elemento);
            return console.log('El elemento se agrego correctamente');
        }else{
            return console.log('Elemento existente');
        }
    }
    delete(elemento){
        let index = this.elementos.indexOf(elemento);
        console.log(`index :${index}`);
        if(index != -1){
            this.elementos.splice(index,1);
        }
        return this.elementos;
    }
    has(elemento){
        if(this.elementos.indexOf(elemento) != -1){
            return true;
        }else return false;
    }
}
var elementos = new Conjunto();
console.log(elementos.add(2));
console.log(elementos.add(3));
console.log(elementos.add(3));
console.log(elementos);
console.log(elementos.has(4));
console.log(elementos.delete(2));
