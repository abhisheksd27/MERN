let btn = document.querySelector('#new-quote');
let quote= document.querySelector('.quote');
let person =document.querySelector(".person");

const quotes = [
    {
        quote: "The only way to do great work is to love what you do.",
        person: "Steve Jobs"
    },
    {
        quote: "Believe you can and you're halfway there.",
        person: "Theodore Roosevelt"
    },
    {
        quote: "The future belongs to those who believe in the beauty of their dreams.",
        person: "Eleanor Roosevelt"
    },
    {
        quote: "It does not matter how slowly you go as long as you do not stop.",
        person: "Confucius"
    },
    {
        quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        person: "Winston Churchill"
    },
    {
        quote: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
        person: "Maya Angelou"
    },
    {
        quote: "Life is 10% what happens to us and 90% how we react to it.",
        person: "Charles R. Swindoll"
    },
    {
        quote: "Whatever you are, be a good one.",
        person: "Abraham Lincoln"
    },
    {
        quote: "The only thing worse than being blind is having sight but no vision.",
        person: "Helen Keller"
    },
    {
        quote: "The best way to find yourself is to lose yourself in the service of others.",
        person: "Mahatma Gandhi"
    },
    {
        quote: "You don't have to be great to start, but you have to start to be great.",
        person: "Zig Ziglar"
    },
    {
        quote: "The journey of a thousand miles begins with one step.",
        person: "Lao Tzu"
    },
    {
        quote: "Don't watch the clock; do what it does. Keep going.",
        person: "Sam Levenson"
    },
    {
        quote: "A person who never made a mistake never tried anything new.",
        person: "Albert Einstein"
    },
    {
        quote: "In three words I can sum up everything I've learned about life: It goes on.",
        person: "Robert Frost"
    },
    {
        quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
        person: "Ralph Waldo Emerson"
    },
    {
        quote: "The only true wisdom is in knowing you know nothing.",
        person: "Socrates"
    },
    {
        quote: "It is during our darkest moments that we must focus to see the light.",
        person: "Aristotle"
    },
    {
        quote: "Happiness is not something ready-made. It comes from your own actions.",
        person: "Dalai Lama"
    },
    {
        quote: "The only way to do great work is to love what you do.",
        person: "Steve Jobs"
    }
];


btn.addEventListener('click',function(){
    let random=Math.floor(Math.random()*quotes.length);

    quote.innerText =quotes[random].quote;
    person.innerText =quotes[random].person;
})


