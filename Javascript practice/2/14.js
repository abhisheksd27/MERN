//  create a function that generates a random number between a range



const  generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const min=100
const max=150

console.log(generateRandomNumber(min,max));