// Find the largest elements in an array using the reduce() method

let arr=[19,43,789,424,98]

let largest=arr.reduce((max,current)=>max>current?max:current)
console.log(largest)