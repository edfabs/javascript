num=1;
numeration='';
while(num<101){
    if( num % 3 == 0){
        numeration += 'Fizz, ';
        numeration += num +', ';
    }else if( num % 5 == 0){
        numeration += 'Buzz, ';
        numeration += num +', ';
    }else if( num % 1 == 0 && num % num==0){
        numeration += 'FizzBuzz, ';
        numeration += num +', ';
    }
    else{
        numeration += num +', ';
    }
    num++;
}
console.log(numeration)