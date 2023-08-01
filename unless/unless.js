function unless(test, then) { 
    if (!test) then(); 
} 
for (let i = 0; i < 5; i++) {
    unless(i % 2 == 1, () => {
        console.log(i, "is even");
    }); 
    
}
// repeat(3, n => {
//     unless(n % 2 == 1, () => {
//         console.log(n, "is even");
//     }); 
// });