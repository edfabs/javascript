console.log("papa".replace("p", "m"));

console.log("Borobudur".replace(/[ou]/g, "a"));

console.log("Liskov, Barbara\nMcCarty, John\nWalder, Philip".replace(/(\w+), (\w+)/g,"$2 $1"));

let s = "la cia y el fbi";
console.log(s.replace(/\b(fbi|cia)\b/g, str => str.toUpperCase()));