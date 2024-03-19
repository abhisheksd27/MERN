// basic DOm manipulation
// Create a button dynamically and add it to the webpage

const button = document.createElement("button");
button.innerHTML = "Click me";
document.body.appendChild(button);

const div=document.querySelector('.container');
const button2=document.createElement('button')
button2.textContent='Add item'
div.appendChild(button2)