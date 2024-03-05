// Objects
let obj={
    name:"Abhishek",
    age:21,
    "last name":"Shek",
    fun:function(){
        console.log("I'm a function Inside a objects")
    },
    arr:[1,5,7,3],
}

console.log(obj.name);
console.log(obj.age);
console.log(obj.fun);
obj.fun();
console.log(obj["last name"]);
console.log(obj["age"]);
console.log(obj["arr"]);

let a="key2"
obj[a]="item2"
obj.key="item"
console.log(obj)


for(let i in obj){
    console.log(i);//keys
    console.log(obj[i]);//values
}

for(let i of Object.keys(obj)){
    console.log(i)
}

for(let i of Object.values(obj)){
    console.log(i)
}

// Objects inside the arrays
let arr=[
    {
        user:1,
        name:"Abhi"
    },
    {
        user:2,
        name:"Tate"
    },
    {
        user:3,
        name:"john"
    }
]

console.log(arr)
console.log(arr[0])

for(let i in arr){
    console.log(i)
    console.log(arr[i])
}

for(let i of arr){
    console.log(i)
}

let [{name},{user},...item3]=arr;

console.log(name)//name
console.log(user)//2
console.log(item3)
console.log(item3[0])



// Functions Inside the Functions
function fun(){
    console.log("I'm function 1")
    function fun2(){
        console.log("I'm function 2")
    }

    fun2();
}
fun();


// Lexical Scope

function fun3(){
    var a=1;
    console.log("function :"+ a);
    function fun4(){
        var a=2;
        console.log("this is function :"+ a)

    }
    fun4()
}
fun3();