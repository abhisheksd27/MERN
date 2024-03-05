// Debugger
function fun(){
    // debugger;
    for(let i=1;i<=5;i++){
        console.log(i);
    }
}
fun();


// Sets  -> unique value

const arr=[10,20,30,40,50];
console.log(arr)

const s=new Set([10,20,30,40,50,30])
s.add(55)
s.add("hello")
console.log(s)
// console.log(s.length)  -> not possible
length=0
for(let ele of s){
    length++
}
console.log(length)


//Map
var map1= new Map([[1,"one"],["fname","abhi"],["whole number",[0,1,2,3,4]]])

console.log(map1)

console.log(map1.get(1))//one
console.log(map1.get("fname"))
var key=map1.keys();
for(var k of key){
    console.log(k)
}

var map2= new Map();
console.log(map2)
map2.set("fanme","Abhi")
console.log(map2)

// this keyword
var obj={
    fname: "John",
    age:21,
    fun :function(){
        //console.log(fname); -->error
        console.log(this.fname);
        console.log(this);  //here this is -> obj
    }
}
obj.fun();

function fun1(){
    let fname="john"
    console.log(this.fname) //undefined
}
fun1();
// console.log(this)//window 


// new keyword
function fun2(){
    let fname="john"
    this.fname=fname;
}
console.log(new fun2())



// Constructor
// constructor functions are regular functions there are two conventions through
//they are named with capital letter first
// They should be executed only with teh "new operator"

function User(name){
    if(!new.target){
        return new User(name)
    }
    this.name = name;
}
let person =new User("John")
console.log(person.name)
let person1 = User("John")
console.log(person1.name)


// Symbol->it represents a unique identifier
let sym=Symbol("id");
let sym1=Symbol("id")
console.log(sym.toString())//Symbol(id)
console.log(sym.description)
console.log(sym==sym1)//false
console.log(sym===sym1)//false


let id=Symbol("id");
let obj1={
    name:"John",
    age:21,
    // [id]:1
}
obj1[id]=1;

console.log(obj1[id]);
console.log(obj1);

for(let key in obj1){
    console.log(key) //name and age is  printed but not id bcs symbol is hidden
}