const threedot =document.querySelector('.three-dots')
const container=document.querySelector('.container')
const cut = document.querySelector('.cut')

threedot.addEventListener('click',(e)=>{

    container.style.width='50vw';
})

cut.addEventListener("click",()=>{
    container.style.width='0';
})

