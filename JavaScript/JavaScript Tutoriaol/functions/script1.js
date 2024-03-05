// Arrays
let name1 = ["abhi","John","Cena",1,true,null];

name1.push("Shek")

name1.unshift("Sheks")

console.log(name1);
name1.splice(1,2)// goto 1st index and delete 2 elements

name1.splice(1,0,"Cena") //go to 1st  index dont delete anything and replace index 1 with Cena
console.log(name1);
name1.splice(1,2,"Cena")
console.log(name1);
console.log(name1.length);


//Loopa

let num = [10,20,30,40,50,60,70,80,10];
// for(let i=0;i<num.length;i++){
//     console.log(i)
// }
//


// Foreach

num.forEach((val,index,array)=>{
    console.log(val+" "+ index+" "+ array);
    
})

let h=num.forEach((val,index,array)=>{
    return val+10
    
})
console.log(h) //Undefined its not possible in Foreach 


// Map
num.map((val,index,array)=>{
    console.log(val+" "+ index+" "+ array);
    
});

let g=num.map((val,index,array)=>{
    return val+10
    
});
console.log(num)
console.log(g)


// Concatinations of arrays
num1=[21,4,5,7,3,24,6,3];

console.log(num.concat(num1))

console.log(num.indexOf(20));

console.log(num.reverse())

console.log(num1.sort())

// Slice

let k=num.slice(1,4);
console.log(k)

let l=num.splice(1,4);
console.log(l)

let v =num.filter((val,ind,array)=>{
    if(val>=10 && val<=40){
        return val;
    }
})
console.log(v)

console.log(num)
// find the last index of a number

let n = num.findLastIndex((val)=>{
    return val==10;
})
console.log(n)

// string to array

let num2="10,20,30,60,40"

let arr=num2.split(',');
arr.forEach(ele=>{
    console.log(ele);
})

console.log(arr)

let jo=arr.join(",")
console.log(jo)


// ForIn and ForOf

let array=[10,20,90,37,39,3];

for(let arr in array){
    console.log(arr) //Prints index
    console.log(array[arr])//printsd array values
}

for(let arr of array){
    console.log(arr) //Prints value
    
}


// Multidimensional array

let arr1=[
    ["john",30],//0
    //0     //1
    ["Thomas",28],//1
    //0     //1
    ["robert",23]//2
    //0     //1
]

console.log(arr1)
console.log(arr1[1][0]);

for(let i=0;i<arr1.length;i++){
    for(let j=0;j<arr1[i].length;j++){
        console.log(arr1[i][j])
    }
    
}

// foreach
arr1.forEach(data=>{
    data.forEach(val=>{
        console.log(val);
    })
})

// ForOf

for(let ar of arr1){
    for(i of ar){
        console.log(i)
    }
}