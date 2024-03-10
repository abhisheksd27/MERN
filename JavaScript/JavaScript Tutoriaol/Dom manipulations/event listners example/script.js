const btn = document.querySelector(".reveal-btn");
const hiddencontent = document.querySelector(".hidden-content");

function revealContent(){
    if(hiddencontent.classList.contains('hidden-content')){
        hiddencontent.classList.remove('hidden-content');
    } else {
        hiddencontent.classList.add('hidden-content');
    }
}

btn.addEventListener("click", revealContent);


// const btn = document.querySelector(".reveal-btn");
// const hiddencontent = document.querySelector(".hidden-content");

// function revealContent(){
//     hiddencontent.style.display = 'block';
//     btn.style.display = 'none';
// }

// btn.addEventListener("click", revealContent);
