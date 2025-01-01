let num = 1;
while(num < 100){
    if(num % 3 == 0){
        console.log(num+" Fizz");
    }if(num % 5 == 0){
        console.log(num+" Buzz");
    }if(num % 3 == 0 && num % 5 ==0){
        console.log(num+" FizzBuzz");
    }else{
        console.log(num);   
    }
    num = num + 1;
}