class MultiplicatorUbitFailure extends Error {
    constructor(message){
        super(message);
        this.name = "Multiplicator ubit Failure";
    }
}

function prmitiveMultiply(a, b){
    if(Math.random() < 0.2) {
        return a * b;
    }else{
        throw new MultiplicatorUbitFailure("Klunk");
    }
}

function reliableMultiply(){
    try {
        return prmitiveMultiply(8, 8);   
    } catch (error) {
        console.log(error.message);
    }
   
}

console.log(reliableMultiply(8, 8));