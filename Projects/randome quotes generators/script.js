let btn=document.querySelector('#btn')
let output=document.querySelector(".output")
const quotes = [
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "It is never too late to be what you might have been. - George Eliot",
    "In the end, it's not the years in your life that count. It's the life in your years. - Abraham Lincoln",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "You miss 100% of the shots you don't take. - Wayne Gretzky",
    "The best time to plant a tree was 20 years ago. The second best time is now. - Chinese Proverb"
];



btn.addEventListener("click",()=>{
    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    
    output.textContent = randomQuote;
})



