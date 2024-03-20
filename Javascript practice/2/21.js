// implement a recursive function to find the nth Fibonacci number

let  fib = (n) => {
    if(n === 0){
        return 0;
    }else if(n == 1){
        return 1;
    } else{
        return fib(n-1) + fib(n-2);
    }
}

console.log(fib(9)); // prints 34