// Create a function to calucalte the area of a triangle given its width and height
let w = 5;
let h = 7;
function calculateArea(width,height) {
   let area = (width * height)/2;
   return area;
}
console.log("The area of the triangle is " + calculateArea(w,h)+" units squared");

// arrow function
const calculateAreaArrow = (width, height) => (width * height) / 2;
console.log(`The area of the triangle using an arrow function is ${calculateAreaArrow(w, h)} units squared`);