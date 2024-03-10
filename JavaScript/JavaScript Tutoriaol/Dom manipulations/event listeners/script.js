// Dom manipulations
// Event Listeners

// Element.addEventListner("click",function);

const buttonTwo=document.querySelector('.btn-2');

function alertBtn(){
    alert("I also love js")
}
buttonTwo.addEventListener('click',alertBtn);

// Mouseover
const blocks = document.querySelectorAll(".blocks");

blocks.forEach((block) => {
    block.addEventListener('mouseover', function() {
        block.style.backgroundColor = 'blue';
    });

    block.addEventListener('mouseout', function() {
        block.style.backgroundColor = ''; // This will remove inline styles and revert to the stylesheet defined styles
    });
});

