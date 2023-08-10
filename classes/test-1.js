const iterable = [1, 2, 3];

const iterator = iterable[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());


const myIterable = {
    items : [10, 20, 30],
    [Symbol.iterator](){
        let index = 0;
        return {
            next : () => {
                if (index < this.items.length){
                    console.log(index);
                    return { value: this.items[index++], done: false};
                }else{
                    return { done: true };
                }
            }
        }
    }
}

for (const item of myIterable){
    console.log(item);
}
console.log(myIterable[Symbol.iterator]().next());
console.log(myIterable[Symbol.iterator]().next());
console.log(myIterable[Symbol.iterator]().next());
console.log(myIterable[Symbol.iterator]().next());