// Functions
function name(a){
    console.log(a);
}
let a= "abhishek";
name(a);

function add(a,b,c){
    return a+b+c;

}
a=50;
b=9;
let result=add(a,b,10);
console.log(result);

// 
a=5;
function local(){
    let d=3;
    console.log(a)
}
local()
// console.log(d)


// different types of functions
// ananymouse functions

let fun = function(){
    console.log("Hello");
}
fun();

// to invoke the ananymuse functions

(function(){
    console.log("Hello");// Hello
})();


//arrow functions

let s= (a,b)=>{
    return a+b;
}

console.log(s(2,3));