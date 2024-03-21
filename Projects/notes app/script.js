const createbtn=document.querySelector(".btn");
const notesContainer=document.querySelector(".notes-container");
let notes=document.querySelectorAll('.input-box')

function showNotes(){
    notesContainer.innerHTML=localStorage.getItem("notes");
}
showNotes()


function updateStorage(){
    localStorage.setItem("notes",notesContainer.innerHTML);
}

createbtn.addEventListener("click",()=>{
    let inputbox=document.createElement("p");
    let img=document.createElement("img")
    inputbox.className="input-box";
    inputbox.setAttribute("contenteditable","true");
    img.src="images/delete.png";
    notesContainer.appendChild(inputbox).appendChild(img);


})

notesContainer.addEventListener('click',function(e){
    if(e.target.tagName=="IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }else if(e.target.tagName==="P"){
        notes=document.querySelectorAll('.input-box');
        notes.forEach((note)=>{
            note.onkeyup=function (){
                updateStorage();
            };
        })

    }
})

document.addEventListener("keydown",event=>{
    if(event.key == "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})




