// Copy and Spread
let arr1=["john",202,true];
// let arr2=arr1; //it shares the storage address also 
// let arr2=arr1.slice(0).concat(["Itrems"])

let arr2=[...arr1]

// arr1.push("Berg")
arr2.push("hello")
console.log(arr1)
console.log(arr2)


// Array destructuring

let array1=["thomas","chad","hello","Magnus"];
// let item1=array1[0];
// let item2=array1[1];
// let [item1,item2]=array1;
let [item1,item2,...item3]=array1;

console.log(item1)
console.log(item2)
console.log(item3)
console.log(item3[0])
console.log(item3[1])
