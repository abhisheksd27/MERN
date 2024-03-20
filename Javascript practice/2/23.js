// Implement a private variable using closures
// In this example, we are going to implement a private variable called "privateVar" which is accessible only within the closure.



function createCount(){
    //prvare variable 
    let count=0;
    //inner function closures
    function increment(){
        count ++;
        console.log(count);
    }
    return{
        incrementCounter : function(){
            increment();
        },
        getCount:function(){
            return count ;
        }
    }

}
let count=2;// its different

const counter = createCount();
console.log(counter)