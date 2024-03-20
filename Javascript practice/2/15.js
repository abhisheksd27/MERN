// write a function that takes an array of numbers and returns a new array with only the even number

let arr=[1,2,3,4,5,6,7,89,10]
let even=[]
const arreven=(arr)=>{
    arr.forEach(element => {
        if(element %2 ==0){
            even.push(element)
        }
    
    });
    return even
}

console.log(arreven(arr))