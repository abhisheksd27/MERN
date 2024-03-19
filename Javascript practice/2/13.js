// write a function that calculates the factorial of a given number

let num=5;
const factorial=(num)=>{
    if(num===0 || num===1){
        return 1
    }else{
        return num *  factorial(num-1)
    }
}

console.log(factorial(num))