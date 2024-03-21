const passwordbox = document.querySelector('#password');
const generatebtn = document.querySelector("button");

const length = 12;

const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*";
const alChars = upperCaseLetters + lowerCaseLetters + numbers + symbols;

function createpassword() {
    let password = "";
    password += upperCaseLetters[Math.floor(Math.random() * upperCaseLetters.length)];
    password += lowerCaseLetters[Math.floor(Math.random() * lowerCaseLetters.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    while (length > password.length) {
        password += alChars[Math.floor(Math.random() * alChars.length)];
    }
    passwordbox.value = password;
}

generatebtn.addEventListener('click', createpassword);

function copypassword(){
    
    passwordbox.select();
    document.execCommand("copy");
    alert("Password Copied!");
}
