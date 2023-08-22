class PGroup{
    constructor(members){
        this.members = members || [];
    }
    add(value){
        if(!this.has(value)){
            this.members.push(value);
        }
        return new PGroup(this.members);
    }
    delete(value){
        let arr = this.members.map(a =>a).filter(elem => elem != value);
        return new PGroup(arr);
    }
    has(value){
        return this.members.includes(value);
    }
}

// PGroup.empty = function () {
//     return this.members = null;
// }

PGroup.empty = new PGroup();

let a = PGroup.empty.add('a');
let ab = a.add('b');
let b = ab.delete('a');

console.log(b.has('b'));
console.log(a.has('b'));
console.log(b.has('a'));

console.log(PGroup.empty);