function test(arr){
    var newValue = update(arr, elem => (elem)*2);
    return newValue;
}
function update(arr, dos){
    let updated=arr.map(elem => dos(elem));
    body(updated);
}

function body(value){
    return console.log(value,"Es el valor modificado");
}

console.log(test([1,2,3,4,5]))

/// the right solution by chatgpt

function loop(value, testFn, updateFn, bodyFn) {
    while (testFn(value)) {
      bodyFn(value);
      value = updateFn(value);
    }
  }
  
  // Example usage of the loop function
  loop(
    3,                          // Initial value
    (value) => value > 0,       // Test function: Continue while value is greater than 0
    (value) => value - 1,       // Update function: Decrement the value by 1 in each iteration
    (value) => {                // Body function: Print the current value
      console.log(value);
    }
  );
  