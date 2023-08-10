class Group{
    constructor(){
        this.members = [];
    }
    add(value){
        if(!this.has(value)){
            this.members.push(value);
        }
        return this.members;
    }
    delete(value){
        const index = this.members.indexOf(value);
        if(index !== -1){
            this.members.splice(index, 1);
        }
    }
    has(value) {
        return this.members.includes(value);
    }

    static from(iterable){
        const group = new Group();
        for(const item of iterable){
            group.add(item);
        }
        return group;
    }

    // interator(){
    //     const inter = this.members[Symbol.iterator]();
    //     return inter;
    // }
    [Symbol.iterator](){
        const members = this.members;
        let index = 0;
        return{
            next: () => {
                if (index < members.length){
                    return {value: members[index++], done: false};
                }else return {done: true}
            }
        }
    }

}

const members =new Group();
let fabian = {name: "Fabian"};
let vector1 = {x:3, y: 2};
members.add(fabian);
members.add(fabian);
members.add(vector1);
members.add(10);
members.add(20);
members.add(30);
console.log(members);
members.delete(10);
members.delete(fabian);
console.log(members);
console.log(members.has(vector1))
members.add(fabian);

const newGroup = Group.from([10,20,30,40]);
console.log(newGroup.has(30));
console.log(newGroup);


for(const val of members){
    console.log(val)
}

console.log(Object.getOwnPropertyNames(members));