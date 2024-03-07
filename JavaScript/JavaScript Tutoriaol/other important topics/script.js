// Asynchronous JS

// js is synchronous
// meaning it waits for one thing to finish
// before moving onto the next.
// asynchronous - code doesn't have to wait for something to happen, 
// it can keep going and do other things in the meantime.

//settimeout
// console.log("this")
// setTimeout(()=>{
//     console.log("Asynchronous")
// },2000);
// console.log("is");

// setTimeout(fun,1000);
// console.log("this")

// function fun(){
//     console.log("Asynchronous")
// };

// console.log("is");

// setTimeout(fun,0);
// console.log("this")

// function fun(){
//     console.log("Asynchronous")
// };

// console.log("is");

//callback

// function fun(val){
//     console.log(val);
// }

// function add(a,b,callback){
//     let sum = a+b;
//     callback(sum);
    
// };

// add(1,2,fun)

// callback hell
function loadingData(){
    return new Promise((resolve, reject)=>{
        console.log("Processing")
        setTimeout(()=>{
            console.log("1. Loading data.....")
            resolve();
        },1000)
    })
    
}

function collectingData(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("2. collecting data.....")
            reject("collecting data not full filled");
            // resolve();
        },1000)
    })
    
    
}

function approvingData(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("3. approving data.....")
            resolve();
        },1000)
    })
    
} 

function approved(){
   
            console.log("4. approved")
        
    
}
// callback hell
// loadingData(function(){
//     collectingData(function(){
//         approvingData();
//     approved();
//     });
    
// });

// loadingData().then(collectingData).then(approvingData).then(approved).catch((err)=>{
//     console.log(err)
// })





//Async_Await

async function Ex(){
    await loadingData();
    // await collectingData();
    await approvingData();
    await approved();
}

Ex().then(collectingData).catch((err)=>{
    console.log(err)
});