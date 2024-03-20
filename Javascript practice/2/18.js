// Remove all occurance of a specific elements from an array

const newarr=(arr,k)=>{
    arr.forEach(ele => {
        if(ele===k){
            arr.splice(arr.indexOf(ele),1)
        }
    });
    return  arr;
}

let arr=[1,2,4,5,78,4,3]
let k=5
console.log(newarr(arr,k))//[1, 2, 4, 78, 3]