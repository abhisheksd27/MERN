 
let value=document.querySelector('#value')
const dec=document.querySelector('.btn-decrease')
const reset = document.querySelector('.btn-reset')
const inc = document.querySelector(".btn-increase")

let count=0


dec.addEventListener('click',()=>{
    count--;
    updatefun()
    

})

inc.addEventListener('click',()=>{
    count++;
    updatefun()
    
    
})

reset.addEventListener('click',()=>{
    count=0;
    updatefun()
 
})

function updatefun(){
    if(count<0){
        value.style.color= "red"
    }else if(count>0){
        value.style.color= "green"
    }else{
        value.style.color="black" 
    }
    value.textContent=count;
}