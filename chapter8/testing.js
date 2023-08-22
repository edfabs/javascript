function test(label, body){
    if (!body()) console.log(`Failed: ${label}`);
}

console.log(test("convert Latin text to uppercase", () => {
    return "hello".toUpperCase() == "HELLO";
}));

// test("convert Geek text to uppercase", () => {
//     return "Χαίρετε".toUpperCase() == "XA´IPETE";
// });

test("don't convert case-less characters", () => {
    return "مرحبا".toUpperCase() == "مرحبا";
});