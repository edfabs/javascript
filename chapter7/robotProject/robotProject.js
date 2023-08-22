const roads = ["Alice's House-Bob's House", "Alice's House-Cabin", "Alice's House-Post Office", "Bob's House-Town Hall", "Daria's House-Ernie's House", "Daria's House-Town Hall", "Ernie's House-Grete's House", "Grete's House-Farm", "Grete's House-Shop", "Marketplace-Farm", "Marketplace-Post Office", "Marketplace-Shop", "Marketplace-Town Hall", "Shop-Town Hall"];

function buildGraph(edges){
    let graph = Object.create(null);
    function addEdge(from, to){
        if(graph[from] == null){
            graph[from] = [to];
        }else{
            graph[from].push(to)
        }
    }
    for(let [from, to] of edges.map(r => r.split("-"))){
        addEdge(from, to);
        addEdge(to, from);
    }
    return graph;
}


const roadGraph = buildGraph(roads);

class VillageState{
    constructor(place, parcels){
        this.place = place;
        this.parcels = parcels;
    }
    move(destination){
        console.log('******** Move method ***********');
        // console.log('destination:' ,destination);
        // console.log('move metod: ',roadGraph[this.place]);
        // console.log('This.Parcels: ',this.parcels);
        // console.log('This place: ', this.place);
        if(!roadGraph[this.place].includes(destination)){
            return this;
        }else{
            let parcels = this.parcels.map(p => {
                // console.log('map of move in the array of parcels elements');
                // console.log('p.place:', p.place);
                // console.log('this.place:', this.place);
                // console.log('p:', p);
                if(p.place != this.place) return p;
                return {place: destination, address: p.address};
            }).filter(p => p.place != p.address);
            // console.log("*****parcels:",parcels);
            return new VillageState(destination, parcels);
        }
    }
}

let first = new VillageState("Post Office", [{place: "Post Office", address: "Alice's House"}]);
let next = first.move("Alice's House");
// console.log(next.place);
// console.log(next.parcels);
// console.log(first.place);
// console.log(first.parcels);

function runRobot(state, robot, memory){
    console.log('******** RunRObot ***********');
    for(let turn = 0;;turn++){
        if(state.parcels.length == 0){
            console.log(`Done in ${turn} turns`);
            break;
        }
        let action = robot(state, memory);
        // console.log('action: ',action.direction, action.memory);
        state = state.move(action.direction);
        // console.log('state return of move', state);
        memory = action.memory;
        console.log(`Moved to ${action.direction}`);
    }
}

function randomPick(array){
    let choice = Math.floor(Math.random() * array.length);
    return array[choice];
}

function randomRobot(state){
    return { direction: randomPick(roadGraph[state.place])};
}

VillageState.random = function(parcelCount = 5){
    let parcels = [];
    for (let i = 0; i < parcelCount; i++) {
        let address = randomPick(Object.keys(roadGraph));
        let place;
        do{
            place = randomPick(Object.keys(roadGraph));
        }while(place === address);
        parcels.push({place, address});
    }
    return new VillageState("Post Office", parcels);
}

// runRobot(VillageState.random(), randomRobot);

const mailRoute = [
    "Alice's House", "Cabin", "Alice's House", "Bob's House",
    "Town Hall", "Daria's House", "Ernie's House",
    "Grete's House", "Shop", "Grete's House", "Farm",
    "Marketplace", "Post Office"
];

function routeRobot(state, memory){
    if(memory.length == 0){
        memory = mailRoute;
    }
    console.log('route function: ', memory);
    return {direction: memory[0], memory: memory.slice(1)};
}

// runRobot(VillageState.random(), routeRobot, []);

function findRoute(graph, from, to){
    console.log('******** FindRoute ***********');
    let work = [{at: from, route: []}];
    // console.log('graph:', graph);
    // console.log('work: ',work);
    // console.log('work length: ', work.length);
    // console.log('to: ',to);
    for (let i = 0; i < work.length; i++) {
        console.log("work length: ", work.length);
        console.log("work: ", work[i]);
        let{at, route} = work[i];
        for(let place of graph[at]){
            // console.log('graph[at]: ',graph[at], ' where at: ', at);
            // console.log('place: ',place)
            if(place == to) {
                // console.log('Route concatenated: ',route.concat(place));
                return route.concat(place);
            }
            if(!work.some( w => w.at ==place)){
                work.push({at: place, route: route.concat(place)});
            }
        }
        
    }
}

function findRouteOne(graph, from, to){
    // console.log('graph:', graph);
    console.log('from: ', from);
    console.log('to: ', to);
    console.log('first element: ', graph.parcels[0].place)
    route = graph;
    route.place = to;
    if(to == graph.parcels[0].place){
        return{ direction: graph.parcels[0].address, memory: route};
    }else{
        return {direction: to, memory: route}
    }
}

function goalOrientedRobot({place, parcels}, route) {
    console.log('********GoalOrientesRobot ***********');
    state = {place, parcels}
    if (route.length == 0){
        let parcel = parcels[0];
        if(parcel.place != place){
            route = findRoute(roadGraph, place, parcel.place);
        }else{
            route = findRoute(roadGraph, place, parcel.address);
        }
    }
    return { direction: route[0], memory: route.slice(1)};
}

function goalOrientedRobotOne({place, parcels}, route) {
    //  console.log('place: ',place,' parcels: ',parcels);
    if(route.length == 0){
        if(place == parcels[0].place){
            route = findRouteOne(roadGraph, place, parcels.place);
        }else{
            route = findRouteOne(roadGraph, place, parcels.address);
        }
    }
    
    return {direction: route.direction, memory: route.memory};
}

runRobot(VillageState.random(), goalOrientedRobot, []);
