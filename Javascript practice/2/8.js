//find the sum of all elements in an array

let arr=[20,30,40,50,60]
function findSum(arr){  
    let sum=0;
    arr.forEach(element => {
        sum+=element
        
    });
    return  sum;
}

console.log("The sum is "+findSum(arr))