let bombTimer = setTimeout(() =>{
    console.log("BOOM!");
}, 600);

if(Math.random() < 0.5){
    console.log("Defused.");
    clearTimeout(bombTimer);
}