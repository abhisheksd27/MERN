console.log("hello");


// conditional statement
let age=16;
if (age >= 18){
    console.log("You can Vote ")
}else if(age <18 || age>15){
    console.log("You can vote in 2 to more years ")

}
else{
    console("You cant vote")
}


// Switch
let ch=3;

switch(ch){
    case 1:
        console.log("Im 1");
        break
    case 2:
        console.log("Im 2");
        break

    default:
        console.log("You enterd wrong choice")
};


// Loop
// For loop
for(let i=1 ; i<=10;i++){
    console.log("hello")
}
// while loop
let i=0
while(i<20){
    console.log("Hello");
    i+=1
}
//do while loop
var j=1;
do{
    console.log("hello hi");
    j+=1;
}while(j<10)


// Variables
// variables cant be starts from numbers
// and only stars from $ and _ or direct 


// var
var name="Abhi";
var name="shek"
console.log(name); // shek




// let
let name1="Abhi";
// let name="shek"
name1="Shek"
console.log(name1);



// const
const name2="Abhi";
// const name2="shek"   -> not possible
// name2="hi"  ->not possible
console.log(name2); 

// Data types
// Primitive datatypes
//1. numbers
let num=50;
console.log(typeof num);


// 2.strings
let str="abhi";
console.log(typeof str);

// 3.Boolean
let flag=true;
console.log(typeof flag);


// 4.null
let a=null;
console.log(typeof a) //object


// 5.undefined
let b;
console.log(typeof b) //undefined

// Type conversion
result='3'+ "hello"
console.log(result);  //3hello
console.log(typeof result) //string


result='3'+ true
console.log(result);  //3true
console.log(typeof result) //string


result='3'+ undefined
console.log(result);  //3undefined
console.log(typeof result) //string

result='3'-2
console.log(result);  //1
console.log(typeof result) //number

result='3'-'hello'
console.log(result);  //NaN
console.log(typeof result) //number


result='3'-true
console.log(result);  //2
console.log(typeof result) //number


result='3'-null
console.log(result);  //3
console.log(typeof result) //number

result='3'+2
console.log(result);  //32
console.log(typeof result) //String


result="3";
result=Number(result);
console.log(result)//3
console.log(typeof result) //number

result=null;
result=Number(result);
console.log(result)//0
console.log(typeof result) //number

result=null;
result=String(result);
console.log(result)//null
console.log(typeof result) //String

result=true;
result=String(result);
console.log(result)//true
console.log(typeof result) //String

result=true;
result=Number(result);
console.log(result)//1
console.log(typeof result) //number

result=20.20;
result=parseInt(result);
console.log(result)//20
console.log(typeof result) //number

result=-20.001;
result=parseFloat(result);
console.log(result)//-20.001
console.log(typeof result) //number


// Operators
// arithmatic operator

console.log(2+5);//7

console.log(2-5)

console.log(2*5)

console.log(5%2)

console.log(2/5)

console.log(5**2)

let z=1;
console.log(z++);//1
console.log(z)//2

let z1=1
console.log(++z1);//2
console.log(z1)//2

let z2=1;
console.log(z2--);//1
console.log(z2);//0

let z3=1;
console.log(--z3);//0
console.log(z3)//0

// Comparision operators

a=5;
b=6;
console.log(a==b);//false
console.log(a!=b);//true
console.log(a<b);//true
console.log(a>b);//false
console.log(a>=b);//false
console.log(a<=b);//true

a="6";
b=6;
console.log(a==b);//true
console.log(a===b);//False
console.log(a!=b);//False
console.log(a!==b);//true

a=true;
b=1;
console.log(a==b);//true
console.log(a===b);//False
console.log(a!=b);//False
console.log(a!==b);//true

// Logical operator  ||-> or , && -> and !a -> not

//logical or
console.log(2>3 || 5>4) //true

//logical and 
console.log(2>3 && 5>4)//false

//logical not
console.log(!true)//false















