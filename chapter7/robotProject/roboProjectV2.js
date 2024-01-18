const caminos = [
    "Casa de Alicia-Casa de Bob",        "Casa de Alicia-Cabaña",
    "Casa de Alicia-Oficina de Correos", "Casa de Bob-Ayuntamiento",
    "Casa de Daria-Casa de Ernie",       "Casa de Daria-Ayuntamiento",
    "Casa de Ernie-Casa de Grete",       "Casa de Grete-Granja",
    "Casa de Grete-Tienda",              "Mercado-Granja",
    "Mercado-Oficina de Correos",        "Mercado-Tienda",
    "Mercado-Ayuntamiento",              "Tienda-Ayuntamiento"
  ];

function construirGrafo(bordes){
    let grafo = Object.create(null);
    function anadirBorde(desde, hasta){
        if (grafo[desde] == null){
            // console.log("creando grafo: "+ grafo[desde]);
            grafo[desde] = [hasta];
        } else{
            grafo[desde].push(hasta);
        }
    }
    var x=0;
    for (let [desde, hasta] of bordes.map(c => c.split("-"))) {
        // console.log("desde: "+ desde+" hasta: "+hasta);
        anadirBorde(desde, hasta);
        anadirBorde(hasta, desde);
    }
    return grafo;
}

const grafoCamino = construirGrafo(caminos);

// console.log(grafoCamino);

class EstadoPueblo {
    constructor(lugar, paquetes){
        this.lugar = lugar;
        this.paquetes = paquetes;
    }

    mover(destino){
        console.log("mover" + grafoCamino[this.lugar]);
        if(!grafoCamino[this.lugar].includes(destino)){
            return this;
        }else{
            let paquetes = this.paquetes.map(p => {
                if(p.lugar != this.lugar) return p;
                return {lugar: destino, direccion: p.direccion};
            }).filter(p => p.lugar != p.direccion);
            return new EstadoPueblo(destino, paquetes);
        }
    }
}

let primero = new EstadoPueblo(
    "Oficina de Correos", [{lugar: "Oficina de Correos", direccion: "Casa de Alicia"}]
);

let siguiente = primero.mover("Casa de Alicia");

console.log(siguiente.lugar);
console.log(siguiente.parcels);
console.log(primero.lugar);