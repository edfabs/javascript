function noisy(f){
    return (...args) => {
        console.log('Calling whit', args);
        let result = f(...args);
        console.log("Called with", args, ", returned", result);
        return result;
    };
}

noisy(Math.min)(3,2,1,4,5,6);