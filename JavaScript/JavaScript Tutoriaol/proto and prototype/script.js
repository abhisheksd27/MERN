// Proto
// let obj={
//     fName:"John",

// }
// let obj2={
//     lName:"Cena",
// }

// obj2.__proto__=obj;
// console.log(obj2)
// console.log(obj2.fName)

// or 

// obj2=Object.create(obj)
// obj2.lName ="Smith"
// console.log(obj2)
// console.log(obj2.fName)


// prototype
// function Person(name,age){
    
//     this.name=name;
//     this.age=age;
    
// }


// Person.prototype.greet = function(){
//         console.log(`Hello ${this.name}`)
//     }


// let name="John";
// let age=21;
// let user =new  Person(name,age)
// user.greet()
// console.log(user)

// console.log(Person.prototype.toString)
// console.log(Person.prototype)


// Class
class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    greet(){
                console.log(`Hello ${this.name}`)
     }

}
let name="John";
let age=21;
let user =new  Person(name,age)
user.greet()
console.log(user)