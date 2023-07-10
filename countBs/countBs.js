function countBs(str){
    var count= 0;
    for(i = 0; i < str.length; i++){
        if(str[i]=='B'){
            count ++;
        }
    }
    return count;
}

function countChar(str){
    var count = 0;
    for(i = 1; i  < str.length; i++){
        count ++;
    }
    return count;
}

var number = countBs("El Beto es como el Bebeto, la mura mamada.");
console.log(number);
 number = countChar("El Beto es como el Bebeto, la mura mamada.");
 console.log(number);