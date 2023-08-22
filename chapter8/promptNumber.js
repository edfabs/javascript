function promptNumber(question){
    // let result = Number(prompt(question));
    process.stdout.write(question);
    process.stdin.on("data", data => {
        data = data.toString().toUpperCase()
        console.log(typeof(data));
        if(Number.isNaN(data)) console.log('No es un numero', data);
        else console.log('Es un numero', data);
        // data = data.toString().toUpperCase()
        // process.stdout.write(data + "\n")
        // process.exit();
    });
    // if(Number.isNaN(result)) return null;
    // else return result;
}
// var nombre;
// process.stdout.write("Dime tu nombre:");
// process.stdout.on('data', data => {
//     nombre = data;
//     process.stdout.write(nombre);
//     process.exit();
// });
console.log(promptNumber("How many trees do you see?"));