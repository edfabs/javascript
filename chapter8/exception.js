function promptDirection(question){
    let result = prompt(question);
    if (result.toLowerCase() == "left") return "L";
    if (result.toLowerCase() == "rigth") return "R";
    throw new Error("invalid direction: " + result);
}

function look(){
    if (promptDirection("Which way?") == "L"){
        return "a house";
    }else{
        return "tow angry bears";
    }
}

try{
    console.log("You see", look());
}catch(error){
    console.log("Something went wrong: "+ error);
}