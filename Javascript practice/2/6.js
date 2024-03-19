// write a function that checks if a number is even or odd and rewturn Even or Odd accordingly

const  checkEvenOrOdd = (num)=>{
    if(num%2==0){
        return "Even"
    }else{
        return "Odd"
    }
}

const num=199;
console.log(checkEvenOrOdd(num));