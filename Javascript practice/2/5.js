// // write a function that takes a string and return the reversed version of it

let string="Hello  world";

// function reverseString(str){
//     if(str===""){
//         return "";
//     }else {
//         let arr=str.split("");//convert string to array 
//         arr=arr.reverse()
//         str=arr.join("")
//         return str
//     }
    
// }
// console.log(reverseString(string));



function reverseString(str) {
    if (str === "") {
      return "";
    }
    let words = str.split(' ');
    for (let i = 0; i < words.length; i++) {
      let chars = words[i].split('');
      let reversedChars = chars.reverse();
      words[i] = reversedChars.join('');
    }
    return words.join(' ');
  }
  
  console.log(reverseString(string));