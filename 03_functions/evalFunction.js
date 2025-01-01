function callSomething(thing = something()) {
    return thing;
  }
  
  let numberOfTimesCalled = 0;
  function something() {
    numberOfTimesCalled += 1;
    return numberOfTimesCalled;
  }
  
  console.log(callSomething()); // 1
  console.log(callSomething()); // 2
  console.log(callSomething()); // 3
  
  function append(value, array = []) {
    array.push(value);
    return array;
  }
  
console.log(append(1)); // [1]  
console.log(append(2)); // [2], no [1, 2]
console.log(append(7));

console.log(callSomething()); // 4
console.log(callSomething()); // 5